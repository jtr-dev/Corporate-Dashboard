/// <reference path="../../../../../node_modules/@types/c3/index.d.ts" />
import { Component, OnInit } from '@angular/core';

/**
*	This class represents the lazy loaded HomeComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'home-cmp',
	templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
	ngOnInit() {
		var vmap: any = $('#vmap');
		vmap.vectorMap({
			map: 'usa_en',
			backgroundColor: '#FFF',
			borderColor: '#D9D9D9',
			borderOpacity: 0.25,
			borderWidth: 1,
			color: '#CCCCCC',
			enableZoom: true,
			hoverColor: '#63B4E6',
			hoverOpacity: null,
			normalizeFunction: 'linear',
			scaleColors: ['#b6d6ff', '#005ace'],
			selectedColor: '#63B4E6',
			selectedRegions: [],
			showTooltip: true,
			pins: {'fl': "<span>4</span>",'or': "<span>4</span>"}
			pinMode: 'content'
			onRegionClick: function(element: any, code: any, region: any) {
				var message = 'You clicked "'
				+ region
				+ '" which has the code: '
				+ code;
				console.log(message);
			}
		});
		c3.generate({
			bindto: '#lineChart',
			data: {
				columns: [
				['Customers', 12, 13, 11, 31, 15, 21],
				["Hourly Revenue", 200, 250.34, 400.40, 532.31, 732.21, 824.21 ]
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
						text: 'Revenue'
						position: 'outer-middle'
					},
					tick: {
						format: d3.format("$,")
					}
				},
				y2:  {
					show: true
					label: {
						text: "Customers",
						position: 'outer-middle'
					}
				}
			}
		});

		c3.generate({
			bindto: '#cbar',
			data: {
				columns: [
				['Open Issues', 2, 3, 1, 3, 5, 2],
				['Closed Issues', 3, 5, 7, 7, 8, 10]
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
          		y:  {
					show: true
					label: {
						text: "Issues",
						position: 'outer-middle'
					}
				}
          	}
        });
	}
}
