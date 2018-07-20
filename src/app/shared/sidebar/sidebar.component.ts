import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({

	selector: 'sidebar-cmp',
	templateUrl: 'sidebar.html'
})

export class SidebarComponent implements OnInit {
	isActive = false;
	showMenu: string = '';

	ngOnInit() {

	}

	eventCalled() {
		this.isActive = !this.isActive;
	}

	addExpandClass(element: any) {
		if (element === this.showMenu) {
			this.showMenu = '0';
		} else {
			this.showMenu = element;
		}
	}
}
