import { Route, RouterModule } from '@angular/router';
import { ProgressbarComponent } from './progressbar.component';

const progressbarRoutes: Route[] = [
    { path: '', component: ProgressbarComponent }
];

export default RouterModule.forChild(progressbarRoutes);
