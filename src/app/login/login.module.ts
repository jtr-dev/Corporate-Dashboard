import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import loginRoutes from './login.routes';

@NgModule({
  imports: [
    CommonModule,
    loginRoutes,
  ],
  declarations: [LoginComponent]
})
export default class LoginModule { }
