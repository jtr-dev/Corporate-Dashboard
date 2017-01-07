import { Route, RouterModule } from '@angular/router';
import { ComposeComponent } from './compose.component';

const composeRoutes: Route[] = [
    { path: '', component: ComposeComponent }
];

export default RouterModule.forChild(composeRoutes);
