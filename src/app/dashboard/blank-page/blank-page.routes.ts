import { Route, RouterModule } from '@angular/router';
import { BlankPageComponent } from './blank-page.component';

const blankPageRoutes: Route[] = [
    { path: '', component: BlankPageComponent }
];

export default RouterModule.forChild(blankPageRoutes);
