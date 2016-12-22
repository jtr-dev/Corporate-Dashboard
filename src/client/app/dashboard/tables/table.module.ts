import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { TableComponent } from './table.component';
import {DataTableModule} from 'angular2-datatable';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [CommonModule, DataTableModule,FormsModule],
    declarations: [TableComponent],
    exports: [TableComponent]
})

export class TableModule { }
