import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
	selector: 'sidebar-cmp',
	templateUrl: './sidebar.component.html'
})

export class SidebarComponent implements OnInit {
	isActive = false;
	showMenu: string = '';

	ngOnInit() {
		var calendar:any = $('#calendar1');
		calendar.fullCalendar({
			 eventClick: function(calEvent:any, jsEvent:any, view:any) {
			    alert('Event: ' + calEvent.title);
			    alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
			    alert('View: ' + view.name);
			}
		});
		var sidebar: any = $('.sidenav-outer');
		sidebar.perfectScrollbar();
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
