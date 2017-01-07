import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertModule as Alert } from 'ng2-bootstrap/ng2-bootstrap';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';

import { AlertComponent } from './alert.component';
import alertRoutes from './alert.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Alert,
    ToasterModule,
    alertRoutes
  ],
  declarations: [AlertComponent]
})
export default class AlertModule { }
