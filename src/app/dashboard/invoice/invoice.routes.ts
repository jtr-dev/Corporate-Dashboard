import { Route, RouterModule } from '@angular/router';
import { InvoiceComponent } from './invoice.component';

const invoiceRoutes: Route[] = [
    { path: '', component: InvoiceComponent }
];

export default RouterModule.forChild(invoiceRoutes);
