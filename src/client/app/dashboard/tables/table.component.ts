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

	public newIssue: any = [{
		repo: 'Career Builder',
		issue: 'Can\'t login',
		comment: ' Attack dog, run away and pretend to be victim with tail in the air',
		opened: this.opened()
	}, {
		repo: 'Grocery App',
		issue: 'Cafe c\'est non noir',
		comment: 'J\'aime le cafè noir, avec la creme et du sugar. Mais, c\'est non noir a plus. ',
		opened: this.opened()
	}, {
		repo: 'Grocery App ',
		issue: 'Ou le pommes ',
		comment: 'Je ne peux pas trouver les pommes, J\'ai regardé partout ',
		opened: this.opened()
	}, {
		repo: 'Leo interdum lectus elementum',
		issue: 'Lorem ipsum dolor sit amet.',
		comment: '  Ignore the squirrels, you\'ll never catch them ',
		opened: this.opened()
	}];
	public tableList: any = [
		{
			repo: 'Eu recusandae ',
			issue: 'Lorem ipsum dolor sit amet.',
			comment: ' Element convallis risus mauris nam magna wisi, hendrerit dui mauris tincidunt integer in a.',
			opened: 'sun Dec 25 2016, 12:20'
		}, {
			repo: 'Nec porta ',
			issue: 'Lorem ipsum dolor sit amet.',
			comment: 'A claw then lick paws clean wash down prawns with a lap of carnation milk then retire to ',
			opened: this.opened()
		}, {
			repo: 'lacus quam nunc eget',
			issue: 'Lorem ipsum dolor sit amet.',
			comment: 'Lay on arms while you\'re using the keyboard eat prawns daintily',
			opened: this.opened()
		}
	];



	constructor(private http: Http) {
	}

	ngOnInit(): void {
		this.http.get('src/client/app/dashboard/tables/data.json')
			.subscribe((data) => {
				setTimeout(() => {
					this.data = data.json();
				}, 2000);
			});
		setInterval(() => {
			this.tableList.push(this.newIssue[Math.floor(Math.random() * this.newIssue.length)]);
		}, 17000);
		setInterval(() => {
			this.tableList.splice(Math.floor(Math.random() * this.tableList.length), 1);
		}, 15000);
		setInterval(() => {
			this.tableList.push(this.newIssue[Math.floor(Math.random() * this.newIssue.length)]);
		}, 33000);
		setInterval(() => {
			this.tableList.splice(Math.floor(Math.random() * this.tableList.length), 1);
		}, 38000);
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
