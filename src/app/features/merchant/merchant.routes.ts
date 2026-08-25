import { Routes } from '@angular/router';
import { authGuard } from '../../core/guards/auth.guard';
import { roleGuard } from '../../core/guards/role.guard';

export const MERCHANT_ROUTES: Routes = [
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
          import('./auth/register/merchant-register.component').then(m => m.MerchantRegisterComponent)
      }
    ]
  },
  {
    path: 'dashboard',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['Merchant'] },
    loadComponent: () =>
      import('./dashboard/merchant-dashboard.component').then(m => m.MerchantDashboardComponent)
  }
];
