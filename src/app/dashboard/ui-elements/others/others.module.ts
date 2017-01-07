import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, TooltipModule } from 'ng2-bootstrap/ng2-bootstrap';

import { OthersComponent } from './others.component';
import othersRoutes from './others.routes';

@NgModule({
  imports: [
    CommonModule,
    CarouselModule,
    TooltipModule,
    othersRoutes
  ],
  declarations: [OthersComponent]
})
export default class OthersModule { }
