import { Route, RouterModule } from '@angular/router';
import { PaginationComponent } from './pagination.component';

const paginationRoutes: Route[] = [
    { path: '', component: PaginationComponent }
];

export default RouterModule.forChild(paginationRoutes);
