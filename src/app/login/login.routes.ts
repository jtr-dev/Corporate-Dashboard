import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

const loginRoutes: Route[] = [
	{ path: '', component: LoginComponent }
];

export default RouterModule.forChild(loginRoutes)