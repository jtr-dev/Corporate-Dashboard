import { Route, RouterModule } from '@angular/router';
import { AlertComponent } from './alert.component';

const alertRoutes: Route[] = [
    { path: '', component: AlertComponent }
];

export default RouterModule.forChild(alertRoutes);
