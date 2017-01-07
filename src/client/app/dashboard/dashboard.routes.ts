import { Route } from '@angular/router';

import { HomeRoutes } from './home/index';
import { TableRoutes } from './tables/index';
import { FormRoutes } from './forms/index';
import { InvoiceRoutes } from './invoice/index';
import { ProfileRoutes } from './profile/index';

import { DashboardComponent } from './index';

export const DashboardRoutes: Route[] = [
  	{
    	path: 'dashboard',
    	component: DashboardComponent,
    	children: [
	    	...HomeRoutes,
	    	...TableRoutes,
	    	...FormRoutes,
	    	...InvoiceRoutes,
	    	...ProfileRoutes
    	]
  	}
];
