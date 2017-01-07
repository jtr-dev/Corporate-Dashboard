import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsComponent } from './icons.component';
import iconsRoutes from './icons.routes';

@NgModule({
  imports: [
    CommonModule,
    iconsRoutes
  ],
  declarations: [IconsComponent]
})
export default class IconsModule { }
