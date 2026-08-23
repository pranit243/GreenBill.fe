import {Routes} from '@angular/router';

export const OWNER_ROUTES: Routes = [    {
        path: 'auth',
        children: [
            {
                path: 'registration',
                loadComponent: () => 
                    import('./Auth/registration/registration.component')
                .then(m=>m.RegistrationComponent)
            }
        ]
    }
]