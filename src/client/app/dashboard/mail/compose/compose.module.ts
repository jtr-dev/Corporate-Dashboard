import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComposeComponent } from './compose.component';

@NgModule({
    imports: [CommonModule],
    declarations: [ComposeComponent],
    exports: [ComposeComponent]
})

export class ComposeModule {}
