import { Route, RouterModule } from '@angular/router';
import { UiElementsComponent } from './ui-elements.component';

const uiElementsRoutes: Route[] = [
	{
		path: '', component: UiElementsComponent ,
		children: [
			{ path: 'alert', loadChildren: 'app/dashboard/ui-elements/alert/alert.module' },
			{ path: 'buttons', loadChildren: 'app/dashboard/ui-elements/buttons/buttons.module' },
			{ path: 'cards', loadChildren: 'app/dashboard/ui-elements/cards/cards.module' },
			{ path: 'dropdown', loadChildren: 'app/dashboard/ui-elements/dropdown/dropdown.module' },
			{ path: 'icons', loadChildren: 'app/dashboard/ui-elements/icons/icons.module' },
			{ path: 'others', loadChildren: 'app/dashboard/ui-elements/others/others.module' },
			{ path: 'pagination', loadChildren: 'app/dashboard/ui-elements/pagination/pagination.module' },
			{ path: 'progressbar', loadChildren: 'app/dashboard/ui-elements/progressbar/progressbar.module' },
		]
	}
];

export default RouterModule.forChild(uiElementsRoutes);
