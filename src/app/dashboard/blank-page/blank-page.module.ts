import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankPageComponent } from './blank-page.component';
import blankPageRoutes from './blank-page.routes';

@NgModule({
  imports: [
    CommonModule,
    blankPageRoutes
  ],
  declarations: [BlankPageComponent]
})
export default class BlankPageModule { }
