import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormComponent } from './forms.component';

import { FormElementModule } from './elements/elements.module';
import { FormCmpModule } from './form-component/formCmp.module';


@NgModule({
    imports: [
        RouterModule,
        FormElementModule,
        FormCmpModule
    ],
    declarations: [FormComponent],
    exports: [FormComponent]
})

export class FormModule { }
