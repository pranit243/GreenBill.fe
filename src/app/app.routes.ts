import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'owner',
        loadChildren: () =>
        import('./Owner/owner.routes')
            .then(m => m.OWNER_ROUTES)
    }
];
