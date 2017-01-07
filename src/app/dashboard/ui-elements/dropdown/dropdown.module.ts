import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule as Dropdown } from 'ng2-bootstrap/ng2-bootstrap';

import { DropdownComponent } from './dropdown.component';
import dropdownRoutes from './dropdown.routes';

@NgModule({
  imports: [
    CommonModule,
    Dropdown,
    dropdownRoutes
  ],
  declarations: [DropdownComponent]
})
export default class DropdownModule { }
