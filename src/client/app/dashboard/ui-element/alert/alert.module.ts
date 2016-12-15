import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AlrtComponent } from './alert.component';

@NgModule({
    imports: [CommonModule, FormsModule, AlertModule],
    declarations: [AlrtComponent],
    exports: [AlrtComponent]
})

export class AlrtModule {}
