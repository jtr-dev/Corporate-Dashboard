import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule as Pagination } from 'ng2-bootstrap/ng2-bootstrap';

import { PaginationComponent } from './pagination.component';
import paginationRoutes from './pagination.routes';

@NgModule({
  imports: [
    CommonModule,
    Pagination,
    paginationRoutes
  ],
  declarations: [PaginationComponent]
})
export default class PaginationModule { }
