import { NgModule } from '@angular/core';

import { CarouselModule, TooltipModule } from 'ng2-bootstrap/ng2-bootstrap';

import { OtherElementComponent } from './otherElement.component';

@NgModule({
    imports: [CarouselModule, TooltipModule],
    declarations: [OtherElementComponent],
    exports: [OtherElementComponent]
})

export class OtherElementModule { }
