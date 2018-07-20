import { Route } from '@angular/router';

import { HomeRoutes } from './home/home.routes';
import { TableRoutes } from './tables/table.routes';
import { FormRoutes } from './forms/forms.routes';
import { InvoiceRoutes } from './invoice/invoice.routes';
import { ProfileRoutes } from './profile/profile.routes';

import { DashboardComponent } from './dashboard.component';

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
