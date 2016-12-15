import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AlrtModule } from './alert/alert.module';
import { ButtonModule } from './buttons/buttons.module';
import { DropdownsModule } from './dropdown/dropdown.module';
import { CardModule } from './cards/cards.module';
import { IconsModule } from './icons/icons.module';
import { ProgressbarsModule } from './progressbar/progressbar.module';
import { PaginationModule } from './pagination/pagination.module';
import { OtherElementModule } from './other-element/otherElement.module';

import { UiElementComponent } from './uiElement.component';

@NgModule({
    imports: [
    	RouterModule,
    	AlrtModule,
    	ButtonModule,
    	DropdownsModule,
    	CardModule,
    	IconsModule,
    	ProgressbarsModule,
    	PaginationModule,
        OtherElementModule
    ],
    declarations: [UiElementComponent],
    exports: [UiElementComponent]
})

export class UiElementModule {}
