declare var c3: any;

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
	public clasd: number;
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
					this.Init(this.mapCustomers.us, this.mapCustomers.fr, this.mapCustomers.se,
						this.mapEmployees.us, this.mapEmployees.fr, this.mapEmployees.se);
				}, 2000);
			});
	}
	Init(C_us: number, C_fr: number, C_se: number, E_us: number, E_fr: number, E_se: number): void {
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
				se: '#63B4E6'
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
						+ E_fr + ' <br/> Customers: ' + C_fr + ' </p></div>'
					);
				} else if (code === 'us') {
					label.html(
						'<div class="map-tooltip"><h3 class="header">United States</h3><p class="description">Employees: '
						+ E_us + ' <br/> Customers: ' + C_us + ' </p></div>'
					);
				} else if (code === 'se') {
					// HTML Based Labels. You can use any HTML you want, this is just an example
					label.html(
						'<div class="map-tooltip"><h3 class="header">Sweden</h3><p class="description">Employees: '
						+ E_se + ' <br/> Customers: ' + C_se + ' </p></div>'
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
					}
					// ,
					// tick: {
					// 	format: d3.format('$,')
					// }
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
