import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FormElementComponent } from './elements.component';

@NgModule({
    imports: [FormsModule],
    declarations: [FormElementComponent],
    exports: [FormElementComponent]
})

export class FormElementModule { }
