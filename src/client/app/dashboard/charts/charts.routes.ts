import { Route } from '@angular/router';

import { ChartComponent } from './index';
import { C3Routes } from './c3/index';
import { ChartJsRoutes } from './chartjs/index';

export const ChartRoutes: Route[] = [
	{
		path: 'charts',
		component: ChartComponent,
		children: [
			...C3Routes,
			...ChartJsRoutes
		]
	}
];
