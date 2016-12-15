import { NgModule } from '@angular/core';
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';

import { DropdownsComponent } from './dropdown.component';

@NgModule({
    imports: [DropdownModule],
    declarations: [DropdownsComponent],
    exports: [DropdownsComponent]
})

export class DropdownsModule {}
