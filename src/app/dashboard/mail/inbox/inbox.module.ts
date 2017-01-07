import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxComponent } from './inbox.component';
import inboxRoutes from './inbox.routes';

@NgModule({
  imports: [
    CommonModule,
    inboxRoutes
  ],
  declarations: [InboxComponent]
})
export default class InboxModule { }
