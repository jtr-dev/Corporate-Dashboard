import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import dashboardRoutes from './dashboard.routes';
import { TopNavModule, SidebarModule } from '../shared/index';

@NgModule({
  imports: [
    CommonModule,
    dashboardRoutes,
    TopNavModule,
    SidebarModule
  ],
  declarations: [DashboardComponent]
})
export default class DashboardModule { }
