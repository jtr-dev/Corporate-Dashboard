import { Component } from '@angular/core';
declare var $:any;

@Component({
    selector: 'top-nav',
    templateUrl: './topnav.component.html',
})

export class TopNavComponent {
	rtl(): void {
		var body: any = $('body');
		body.toggleClass('rtl');
	}

	sidebarToggler(): void  {
		var sidebar: any = $('#sidebar');
		var mainContainer: any = $('.main-container');
		sidebar.toggleClass('sidebar-left-zero');
		mainContainer.toggleClass('main-container-ml-zero');
	}
}
