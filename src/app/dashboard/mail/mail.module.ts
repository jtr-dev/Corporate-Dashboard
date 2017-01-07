import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailComponent } from './mail.component';
import mailRoutes from './mail.routes';

@NgModule({
  imports: [
    CommonModule,
    mailRoutes
  ],
  declarations: [MailComponent]
})
export default class MailModule { }
