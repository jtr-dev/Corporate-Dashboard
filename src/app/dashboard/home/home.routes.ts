import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const homeRoutes: Route[] = [
	{ path: '', component: HomeComponent }
];

export default RouterModule.forChild(homeRoutes)