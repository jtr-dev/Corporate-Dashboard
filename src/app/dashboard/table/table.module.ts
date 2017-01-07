import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableComponent } from './table.component';
import tableRoutes from './table.routes';

@NgModule({
  imports: [
    CommonModule,
    tableRoutes
  ],
  declarations: [TableComponent]
})
export default class TableModule { }
