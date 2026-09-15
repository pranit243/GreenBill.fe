import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();
  const correlationId = crypto.randomUUID();

  const cloned = req.clone({
    setHeaders: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      'X-Correlation-Id': correlationId
    }
  });

  if (req.url.endsWith('/Auth/refresh') || req.url.endsWith('/Auth/login')) {
    return next(cloned);
  }

  return next(cloned).pipe(
    catchError(error => {
      if (error.status !== 401 || !authService.getRefreshToken()) {
        return throwError(() => error);
      }

      return authService.refreshToken().pipe(
        switchMap(() => next(req.clone({
          setHeaders: {
            Authorization: `Bearer ${authService.getToken()}`,
            'X-Correlation-Id': correlationId
          }
        }))),
        catchError(refreshError => {
          authService.logout();
          return throwError(() => refreshError);
        })
      );
    })
  );
};
