import { Routes } from '@angular/router';
import { authGuard } from '../../core/guards/auth.guard';
import { roleGuard } from '../../core/guards/role.guard';

export const OWNER_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'auth/register',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    children: [
      {
        path: 'register',
        loadComponent: () =>
          import('./auth/register/owner-register.component').then(m => m.OwnerRegisterComponent)
      }
    ]
  },
  {
    path: 'dashboard',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['Owner'] },
    loadComponent: () =>
      import('./dashboard/owner-dashboard.component').then(m => m.OwnerDashboardComponent)
  }
];
