import {Component, OnInit} from '@angular/core';
declare var $:any;

@Component({
	selector: 'todo-cmp',
	templateUrl: './todo.component.html'
})

export class TodoComponent implements OnInit {
	newName: string;
	nameList: any = [
		'Start Capstone Project',
		'Study C#',
		'Find a better build process serve task',
	];
	addName(): boolean {
		this.nameList.unshift(this.newName);
		this.newName = '';
		return true;
	}
	ngOnInit() {
		var todoListWraper: any = $('.todo-list-wrap');
		todoListWraper.perfectScrollbar({});
	}
}
