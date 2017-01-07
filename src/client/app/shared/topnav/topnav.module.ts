import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { TopNavComponent } from './topnav.component';

@NgModule({
	imports: [RouterModule],
	declarations: [TopNavComponent],
	exports: [TopNavComponent],
})

export class TopNavModule {}
