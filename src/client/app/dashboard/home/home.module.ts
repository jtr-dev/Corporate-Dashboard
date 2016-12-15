import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import {TodoModule, StatsModule} from '../../widgets/index';

@NgModule({
    imports: [CommonModule, StatsModule, TodoModule],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})

export class HomeModule { }
