import { Route } from '@angular/router';

import { UiElementComponent } from './index';
import { AlrtRoutes } from './alert/index';
import { ButtonRoutes } from './buttons/index';
import { DropdownsRoutes } from './dropdown/index';
import { IconsRoutes } from './icons/index';
import { CardRoutes } from './cards/index';
import { ProgressbarsRoutes } from './progressbar/index';
import { PaginationRoutes } from './pagination/index';
import { OtherElementRoutes } from './other-element/index';

export const UiElementRoutes: Route[] = [
	{
		path: 'ui-element',
		component: UiElementComponent,
		children: [
			...AlrtRoutes,
			...ButtonRoutes,
			...DropdownsRoutes,
			...IconsRoutes,
			...CardRoutes,
			...ProgressbarsRoutes,
			...PaginationRoutes,
			...OtherElementRoutes
		]
	}
];
