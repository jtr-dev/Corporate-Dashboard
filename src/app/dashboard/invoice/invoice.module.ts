import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceComponent } from './invoice.component';
import invoiceRoutes from './invoice.routes';

@NgModule({
  imports: [
    CommonModule,
    invoiceRoutes
  ],
  declarations: [InvoiceComponent]
})
export default class InvoiceModule { }
