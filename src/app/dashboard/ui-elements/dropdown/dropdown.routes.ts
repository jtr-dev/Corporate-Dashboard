import { Route, RouterModule } from '@angular/router';
import { DropdownComponent } from './dropdown.component';

const dropdownRoutes: Route[] = [
    { path: '', component: DropdownComponent }
];

export default RouterModule.forChild(dropdownRoutes);
