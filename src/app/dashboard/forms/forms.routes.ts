import { Route } from '@angular/router';

import { FormElementRoutes } from './elements/elements.routes';
import { FormComponentRoutes } from './form-component/formCmp.routes';

import { FormComponent } from './forms.component';

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
