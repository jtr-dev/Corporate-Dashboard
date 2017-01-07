import { Route, RouterModule } from '@angular/router';
import { InboxComponent } from './inbox.component';

const inboxRoutes: Route[] = [
    { path: '', component: InboxComponent }
];

export default RouterModule.forChild(inboxRoutes);
