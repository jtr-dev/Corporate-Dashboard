import { Route, RouterModule } from '@angular/router';
import { pageNotFoundComponent } from './404-page.component';

const pageNotFoundRoutes: Route[] = [
    { path: '', component: pageNotFoundComponent }
];

export default RouterModule.forChild(pageNotFoundRoutes);
