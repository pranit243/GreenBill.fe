import { Routes } from '@angular/router';
import { authGuard } from '../../core/guards/auth.guard';
import { roleGuard } from '../../core/guards/role.guard';

export const PARTNER_ROUTES: Routes = [
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
          import('./auth/register/partner-register.component').then(m => m.PartnerRegisterComponent)
      }
    ]
  },
  {
    path: 'dashboard',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['Partner'] },
    loadComponent: () =>
      import('./dashboard/partner-dashboard.component').then(m => m.PartnerDashboardComponent)
  }
];
