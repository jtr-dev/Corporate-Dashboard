import {Component, Input} from '@angular/core';

@Component({
	selector: 'stats-cmp',
	templateUrl: './stats.component.html'
})
export class StatsComponent {
	@Input() public icon: string;
	@Input() public value: string;
	@Input() public text: string;
	@Input() public bgclass: string;
	@Input() public link: string;
	@Input() public progressValue: string;


	public statsList: any = [
		{
			icon: 'cloud-upload',
			value: '98%',
			text: 'Server Uptime',
			bgclass: 'success',
			link: 'c3chart',
			progressValue: '98'
		}, {
			icon: 'heartbeat',
			value: '84%',
			text: 'Build Success Rate',
			bgclass: 'info',
			link: 'c3chart',
			progressValue: '84'
		}
	];
}
