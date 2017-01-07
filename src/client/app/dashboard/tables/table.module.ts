import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import {DataTableModule} from "angular2-datatable";

@NgModule({
    imports: [CommonModule, DataTableModule],
    declarations: [TableComponent],
    exports: [TableComponent]
})

export class TableModule { }
