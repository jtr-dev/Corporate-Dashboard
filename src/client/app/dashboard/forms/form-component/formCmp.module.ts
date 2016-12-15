import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FormCmpComponent } from './formCmp.component';

@NgModule({
    imports: [FormsModule],
    declarations: [FormCmpComponent],
    exports: [FormCmpComponent]
})

export class FormCmpModule { }
