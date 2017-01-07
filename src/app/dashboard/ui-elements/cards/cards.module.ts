import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsComponent } from './cards.component';
import cardsRoutes from './cards.routes';

@NgModule({
  imports: [
    CommonModule,
    cardsRoutes
  ],
  declarations: [CardsComponent]
})
export default class CardsModule { }
