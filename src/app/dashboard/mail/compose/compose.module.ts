import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComposeComponent } from './compose.component';
import composeRoutes from './compose.routes';

@NgModule({
  imports: [
    CommonModule,
    composeRoutes
  ],
  declarations: [ComposeComponent]
})
export default class ComposeModule { }
