import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopNavComponent } from './topnav.component';

@NgModule({
	imports: [NgbModule, RouterModule],
	declarations: [TopNavComponent],
	exports: [TopNavComponent],
})

export class TopNavModule {}
