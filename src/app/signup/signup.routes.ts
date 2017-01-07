import { Route, RouterModule } from '@angular/router';
import { SignupComponent } from './signup.component';

const signupRoutes: Route[] = [
	{ path: '', component: SignupComponent }
];

export default RouterModule.forChild(signupRoutes)