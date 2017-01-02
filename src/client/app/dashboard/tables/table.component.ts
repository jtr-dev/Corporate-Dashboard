import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


@Component({
	moduleId: module.id,
	selector: 'tables-cmp',
	templateUrl: 'tables.component.html'
})

export class TableComponent implements OnInit {

	public data: any[];
	public filterQuery = '';
	public rowsOnPage = 10;
	public sortBy = 'opened';
	public sortOrder = 'asc';
	public date: any = new Date();


	constructor(private http: Http) {
	}

	ngOnInit(): void {
		this.http.get('https://corporatedashapi.azurewebsites.net/issues')
			.subscribe((data) => {
				setTimeout(() => {
					this.data = data.json();
				}, 2000);
			});
	}

	public opened() {
		return this.date.toDateString() + ', ' + this.date.getHours() + ':' + this.date.getMinutes();
	}

	public toInt(num: string) {
		return +num;
	}

	public sortByWordLength = (a: any) => {
		return a.city.length;
	}

	public remove = (item: any) => {
		let index = this.data.indexOf(item);
		if (index > -1) {
			this.data.splice(index, 1);
		}
	}
}
