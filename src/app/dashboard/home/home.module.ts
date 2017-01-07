import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import homeRoutes from './home.routes';

import { TodoModule, StatsModule } from '../../widgets/index';

@NgModule({
  imports: [
    CommonModule,
    TodoModule,
    StatsModule,
    homeRoutes
  ],
  declarations: [HomeComponent]
})
export default class HomeModule { }
