declare var $: any;

import { Component, OnInit } from '@angular/core';

@Component({

	selector: 'todo-cmp',
	templateUrl: './todo.component.html'
})

export class TodoComponent implements OnInit {
	newName: string;
	nameList: any = [
		'Meeting with Nabindar Singh.',
		'Exercise at 6:pm with Nicholas.',
		'Avengers Age of Ultron.',
		'Henna birthday at Mezbaan.'
	];
	addName(): boolean {
		if (this.newName === '') return false;
		this.nameList.unshift(this.newName);
		this.newName = '';
		return true;
	}
	ngOnInit() {
	}
}
