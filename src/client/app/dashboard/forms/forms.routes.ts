import { Route } from '@angular/router';

import { FormElementRoutes } from './elements/index';
import { FormComponentRoutes } from './form-component/index';

import { FormComponent } from './index';

export const FormRoutes: Route[] = [
	{
		path: 'forms',
		component: FormComponent,
		children: [
			...FormElementRoutes,
			...FormComponentRoutes
		]
	},
];
