import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataService } from '../../../shared/data/index';

import { DataTableComponent } from './data-table.component';
import dataTableRoutes from './data-table.routes';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
	Ng2SmartTableModule,
    dataTableRoutes
  ],
  declarations: [DataTableComponent],
  providers: [DataService]
})
export default class DataTableModule {}
