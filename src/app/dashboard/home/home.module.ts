import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { StatsModule } from '../../widgets/stats/stats.module';
import { TodoModule } from '../../widgets/todo/todo.module'


@NgModule({
    imports: [CommonModule, StatsModule, TodoModule],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})

export class HomeModule { }
