import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
	selector: 'form-component',
	templateUrl: './form-cmp.components.html'
})

export class FormCmpComponent implements OnInit {
	ngOnInit() {
		var dateTimePicker = $('#date-time-picker');
		dateTimePicker.datetimepicker();
	}
}
