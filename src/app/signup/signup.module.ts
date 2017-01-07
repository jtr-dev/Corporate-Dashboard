import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupComponent } from './signup.component';
import signupRoutes from './signup.routes';

@NgModule({
  imports: [
    CommonModule,
    signupRoutes,
  ],
  declarations: [SignupComponent]
})
export default class SignupModule { }
