import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { InboxModule } from './inbox/inbox.module';
import { ComposeModule } from './compose/compose.module';

import { MailComponent } from './mail.component';

@NgModule({
    imports: [
        RouterModule,
        ComposeModule,
        InboxModule
    ],
    declarations: [MailComponent],
    exports: [MailComponent]
})

export class MailModule { }
