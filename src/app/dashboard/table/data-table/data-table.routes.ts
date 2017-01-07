import { Route, RouterModule } from '@angular/router';
import { DataTableComponent } from './data-table.component';

const dataTableRoutes: Route[] = [
	{ path: '', component: DataTableComponent }
];

export default RouterModule.forChild(dataTableRoutes)