import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';
import { TypographyModule } from './typography/typography.module';
import { GridModule } from './grid/grid.module';
import { TableModule } from './tables/table.module';
import { FormModule } from './forms/forms.module';
import { UiElementModule } from './ui-element/uiElement.module';
import { ChartModule } from './charts/charts.module';
import { CalendarModule } from './calendar/calendar.module';
import { MailModule } from './mail/mail.module';
import { InvoiceModule } from './invoice/invoice.module';
import { BlankPageModule } from './blank-page/blankPage.module';
import { ProfileModule } from './profile/profile.module';

import { TopNavModule } from '../shared/index';
import { SidebarModule } from '../shared/index';

import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [
        CommonModule,
    	RouterModule,
    	HomeModule,
    	TypographyModule,
    	GridModule,
    	TableModule,
    	FormModule,
    	UiElementModule,
    	ChartModule,
    	CalendarModule,
    	MailModule,
    	InvoiceModule,
    	BlankPageModule,
    	ProfileModule,
    	TopNavModule,
    	SidebarModule
    ],
    declarations: [DashboardComponent],
    exports: [DashboardComponent]
})

export class DashboardModule {}
