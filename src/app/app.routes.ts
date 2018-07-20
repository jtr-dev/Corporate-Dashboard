import { Routes } from '@angular/router';

import { LoginRoutes } from './login/login.routes';
import { SignupRoutes } from './signup/signup.routes';
import { DashboardRoutes } from './dashboard/dashboard.routes';
import { PageNotFoundComponent } from './404/404.component';
import { PageNotFoundRoutes } from './404/404.routes'

export const routes: Routes = [
	...LoginRoutes,
	...SignupRoutes,
	...DashboardRoutes,
	...PageNotFoundRoutes,
	{ path: '**', component: PageNotFoundComponent }
];
