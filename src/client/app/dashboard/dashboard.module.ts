import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';
import { TableModule } from './tables/table.module';
import { FormModule } from './forms/forms.module';
<<<<<<< HEAD
import { ChartModule } from './charts/charts.module';
=======
>>>>>>> ed6b5fe27a5c60520242f789ef0d799eb29d5bc5
import { InvoiceModule } from './invoice/invoice.module';
import { ProfileModule } from './profile/profile.module';

import { TopNavModule } from '../shared/index';
import { SidebarModule } from '../shared/index';

import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [
        CommonModule,
    	RouterModule,
    	HomeModule,
    	TableModule,
    	FormModule,
<<<<<<< HEAD
    	ChartModule,
=======
>>>>>>> ed6b5fe27a5c60520242f789ef0d799eb29d5bc5
    	InvoiceModule,
    	ProfileModule,
    	TopNavModule,
    	SidebarModule
    ],
    declarations: [DashboardComponent],
    exports: [DashboardComponent]
})

export class DashboardModule {}
