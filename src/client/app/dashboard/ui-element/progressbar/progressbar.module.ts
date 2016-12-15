import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressbarModule } from 'ng2-bootstrap/ng2-bootstrap';

import { ProgressbarsComponent } from './progressbar.component';

@NgModule({
    imports: [CommonModule, ProgressbarModule],
    declarations: [ProgressbarsComponent],
    exports: [ProgressbarsComponent]
})

export class ProgressbarsModule { }
