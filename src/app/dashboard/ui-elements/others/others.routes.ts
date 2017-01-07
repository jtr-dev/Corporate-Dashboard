import { Route, RouterModule } from '@angular/router';
import { OthersComponent } from './others.component';

const othersRoutes: Route[] = [
    { path: '', component: OthersComponent }
];

export default RouterModule.forChild(othersRoutes);
