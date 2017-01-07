import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressbarModule as Progressbar } from 'ng2-bootstrap/ng2-bootstrap';
import { ProgressbarComponent } from './progressbar.component';
import progressbarRoutes from './progressbar.routes';

@NgModule({
  imports: [
    CommonModule,
    Progressbar,
    progressbarRoutes
  ],
  declarations: [ProgressbarComponent]
})
export default class ProgressbarModule { }
