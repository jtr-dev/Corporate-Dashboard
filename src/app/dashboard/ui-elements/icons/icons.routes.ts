import { Route, RouterModule } from '@angular/router';
import { IconsComponent } from './icons.component';

const iconsRoutes: Route[] = [
    { path: '', component: IconsComponent }
];

export default RouterModule.forChild(iconsRoutes);
