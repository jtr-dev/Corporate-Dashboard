import { Route } from '@angular/router';

import { MailComponent } from './index';
import { InboxComponent } from './inbox/index';
import { ComposeComponent } from './compose/index';

export const MailRoutes: Route[] = [
	{
		path: 'mail',
		component: MailComponent,
		children: [
			{ path: 'inbox', component: InboxComponent },
			{ path: 'compose', component: ComposeComponent }
		]
	},
];
