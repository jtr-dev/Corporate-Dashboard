import { Route, RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons.component';

const buttonsRoutes: Route[] = [
    { path: '', component: ButtonsComponent }
];

export default RouterModule.forChild(buttonsRoutes);
