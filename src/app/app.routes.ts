import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        loadComponent: () =>
          import('./features/auth/login/login.component').then(m => m.LoginComponent)
      }
    ]
  },
  {
    path: 'owner',
    loadChildren: () =>
      import('./features/owner/owner.routes').then(m => m.OWNER_ROUTES)
  },
  {
    path: 'merchant',
    loadChildren: () =>
      import('./features/merchant/merchant.routes').then(m => m.MERCHANT_ROUTES)
  },
  {
    path: 'customer',
    loadChildren: () =>
      import('./features/customer/customer.routes').then(m => m.CUSTOMER_ROUTES)
  },
  {
    path: 'partner',
    loadChildren: () =>
      import('./features/partner/partner.routes').then(m => m.PARTNER_ROUTES)
  },
  {
    path: '**',
    loadComponent: () =>
      import('./shared/components/not-found/not-found.component').then(m => m.NotFoundComponent)
  }
];
