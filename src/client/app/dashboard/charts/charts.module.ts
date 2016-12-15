import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { C3Module } from './c3/c3.module';
import { ChartJsModule } from './chartjs/chartjs.module';

import { ChartComponent } from './charts.component';

@NgModule({
    imports: [
        RouterModule,
        C3Module,
        ChartJsModule
    ],
    declarations: [ChartComponent],
    exports: [ChartComponent]
})

export class ChartModule { }
