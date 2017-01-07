import { Route } from '@angular/router';

import { HomeRoutes } from './home/index';
import { TableRoutes } from './tables/index';
import { FormRoutes } from './forms/index';
<<<<<<< HEAD
import { ChartRoutes } from './charts/index';
=======
>>>>>>> ed6b5fe27a5c60520242f789ef0d799eb29d5bc5
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
<<<<<<< HEAD
	    	...ChartRoutes,
=======
>>>>>>> ed6b5fe27a5c60520242f789ef0d799eb29d5bc5
	    	...InvoiceRoutes,
	    	...ProfileRoutes
    	]
  	}
];
