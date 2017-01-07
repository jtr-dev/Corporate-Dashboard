import { Route, RouterModule } from '@angular/router';
import { MailComponent } from './mail.component';

const mailRoutes: Route[] = [
    {
    	path: '', component: MailComponent,
    	children: [
			{ path: 'inbox', loadChildren: 'app/dashboard/mail/inbox/inbox.module' },
			{ path: 'compose', loadChildren: 'app/dashboard/mail/compose/compose.module' }
		]
    }
];

export default RouterModule.forChild(mailRoutes);
