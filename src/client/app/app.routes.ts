import { Routes } from '@angular/router';

import { LoginRoutes } from './login/index';
import { SignupRoutes } from './signup/index';
import { DashboardRoutes } from './dashboard/index';
import { PageNotFoundRoutes, PageNotFoundComponent } from './404/index';

export const routes: Routes = [
	...LoginRoutes,
	...SignupRoutes,
	...DashboardRoutes,
	...PageNotFoundRoutes,
	{ path: '**', component: PageNotFoundComponent }
];
