/// <reference path="../../../../../node_modules/@types/c3/index.d.ts" />
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

/**
*	This class represents the lazy loaded HomeComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'home-cmp',
	templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
	public data: any[];
	public Customers: any[];
	public Revenue: any[];
	public mapCustomers: any;
	public mapEmployees: any;
	public openIssues: any;
	public closedIssues: any;

	constructor(private http: Http) {
	}

	ngOnInit(): void {
		this.http.get('https://corporatedashapi.azurewebsites.net/revenue')
			.subscribe((data) => {
				setTimeout(() => {
					this.data = data.json();
					console.log(this.data);
					this.Customers = this.data[0].hourlyCustomers;
					this.Revenue = this.data[0].hourlyRevenue;
					this.mapCustomers = this.data[0].demographic.customers;
					this.mapEmployees = this.data[0].demographic.employees;
					this.openIssues = this.data[0].repo.openIssues;
					this.closedIssues = this.data[0].repo.closedIssues;
					console.log(this.mapCustomers.us, this.mapCustomers.fr, this.mapCustomers.de);
					this.Init();
				}, 2000);
			});
	}
	Init(): void {
		var vmap: any = $('#vmap');
		vmap.vectorMap({
			map: 'world_en',
			backgroundColor: '#FFF',
			borderColor: '#D9D9D9',
			borderOpacity: 0.25,
			borderWidth: 1,
			color: '#CCCCCC',
			enableZoom: true,
			hoverColor: '#63B4E6',
			colors: {
				fr: '#63B4E6',
				us: '#63B4E6',
				de: '#63B4E6'
			},
			hoverOpacity: null,
			normalizeFunction: 'linear',
			scaleColors: ['#b6d6ff', '#005ace'],
			selectedColor: '#63B4E6',
			selectedRegions: [],
			showTooltip: true,
			onRegionClick: function (element: any, code: any, region: any) {
				var message = 'You clicked "'
					+ region
					+ '" which has the code: '
					+ code;
				console.log(message);
			},
			onLabelShow: function (event: any, label: any, code: any) {
				if (code === 'fr') {
					label.html(
						'<div class="map-tooltip"><h3 class="header">France</h3><p class="description">Employees: '
						+this.mapEmployees.fr+' <br/> Customers: '+this.mapCustomers.fr+' </p></div>'
					);
				} else if (code === 'us') {
					label.html(
						'<div class="map-tooltip"><h3 class="header">United States</h3><p class="description">Employees: '
						+this.mapEmployees.us+' <br/> Customers: '+this.mapCustomers.us+' </p></div>'
					);
				} else if (code === 'de') {
					// HTML Based Labels. You can use any HTML you want, this is just an example
					label.html(
						'<div class="map-tooltip"><h3 class="header">Sweden</h3><p class="description">Employees: '
						+this.mapEmployees.de+' <br/> Customers: '+this.mapCustomers.de+' </p></div>'
					);
				}
			},
		});

		c3.generate({
			bindto: '#lineChart',
			data: {
				columns: [
					['Customers', ...this.Customers],
					['Hourly Revenue', ...this.Revenue],
				],
				axes: {
					Customers: 'y2'
				},
				types: {
					Customers: 'bar'
				}
			},
			color: {
				pattern: ['#3CA2E0', '#5CB85C', '#F1B35B']
			},
			axis: {
				y: {
					label: {
						text: 'Revenue',
						position: 'outer-middle'
					},
					tick: {
						format: d3.format('$,')
					}
				},
				y2: {
					show: true,
					label: {
						text: 'Customers',
						position: 'outer-middle'
					}
				}
			}
		});

		c3.generate({
			bindto: '#cbar',
			data: {
				columns: [
					['Open Issues', ...this.openIssues],
					['Closed Issues', ...this.closedIssues]
				],
				type: 'bar'
			},
			bar: {
				width: {
					ratio: 0.5 // this makes bar width 50% of length between ticks
				}
			},
			color: {
				pattern: ['#de6764', '#5CB85C']
			},
			legend: {
				show: false
			},
			axis: {
				x: {
					show: false
				},
				y: {
					show: true,
					label: {
						text: 'Issues',
						position: 'outer-middle'
					}
				}
			}
		});
	}
}
