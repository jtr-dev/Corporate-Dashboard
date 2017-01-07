import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsComponent } from './buttons.component';
import buttonsRoutes from './buttons.routes';

@NgModule({
  imports: [
    CommonModule,
    buttonsRoutes
  ],
  declarations: [ButtonsComponent]
})
export default class ButtonsModule { }
