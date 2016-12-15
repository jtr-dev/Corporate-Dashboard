import { Route } from '@angular/router';

import { HomeRoutes } from './home/index';
import { TypographyRoutes } from './typography/index';
import { GridRoutes } from './grid/index';
import { TableRoutes } from './tables/index';
import { FormRoutes } from './forms/index';
import { UiElementRoutes } from './ui-element/index';
import { ChartRoutes } from './charts/index';
import { CalendarRoutes } from './calendar/index';
import { MailRoutes } from './mail/index';
import { InvoiceRoutes } from './invoice/index';
import { BlankPageRoutes } from './blank-page/index';
import { ProfileRoutes } from './profile/index';

import { DashboardComponent } from './index';

export const DashboardRoutes: Route[] = [
  	{
    	path: 'dashboard',
    	component: DashboardComponent,
    	children: [
	    	...HomeRoutes,
	    	...TypographyRoutes,
	    	...GridRoutes,
	    	...TableRoutes,
	    	...FormRoutes,
	    	...UiElementRoutes,
	    	...ChartRoutes,
	    	...CalendarRoutes,
	    	...MailRoutes,
	    	...InvoiceRoutes,
	    	...BlankPageRoutes,
	    	...ProfileRoutes
    	]
  	}
];
