import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';

@NgModule({
	imports: [RouterModule],
	declarations: [SidebarComponent],
	exports: [SidebarComponent],
})

export class SidebarModule {}
