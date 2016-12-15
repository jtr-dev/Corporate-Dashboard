import {Component, OnInit} from '@angular/core';

@Component({
	moduleId: module.id,
    selector: 'compose-cmp',
    templateUrl: './compose.component.html'
})

export class ComposeComponent implements OnInit {
	ngOnInit() {
		var jqte: any = $('.jqte');
		jqte.Editor();
	}
}
