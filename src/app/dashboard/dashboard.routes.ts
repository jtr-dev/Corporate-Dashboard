import { Route, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const dashboardRoutes: Route[] = [
	{
		path: '', component: DashboardComponent,
		children: [
			{ path: 'home', loadChildren: 'app/dashboard/home/home.module' },
			{ path: 'table', loadChildren: 'app/dashboard/table/table.module' },
			{ path: 'invoice', loadChildren: 'app/dashboard/invoice/invoice.module' },
			{ path: 'blank-page', loadChildren: 'app/dashboard/blank-page/blank-page.module' },
			{ path: 'ui', loadChildren: 'app/dashboard/ui-elements/ui-elements.module' },
		]
	}
];

export default RouterModule.forChild(dashboardRoutes)
;
