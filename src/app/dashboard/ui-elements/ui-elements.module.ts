import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiElementsComponent } from './ui-elements.component';
import uiElementsRoutes from './ui-elements.routes';

@NgModule({
  imports: [
    CommonModule,
	uiElementsRoutes    
  ],
  declarations: [UiElementsComponent]
})
export default class UiElementsModule { }
