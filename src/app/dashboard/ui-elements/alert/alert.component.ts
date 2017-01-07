import { Component, AfterViewInit } from '@angular/core';
import { ToasterService } from 'angular2-toaster/angular2-toaster';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})

export class AlertComponent implements AfterViewInit {
	msg: string = null;
	toastMessage: string = null;
	private toasterService: ToasterService;

    constructor(toasterService: ToasterService) {
        this.toasterService = toasterService;
    }

	public alerts:Array<Object> = [
		{
			type: 'danger',
			msg: 'Oh snap! Change a few things up and try submitting again.'
		},
		{
			type: 'success',
			msg: 'Well done! You successfully read this important alert message.',
			closable: true
		}
	];

	public closeAlert(i:number):void {
		this.alerts.splice(i, 1);
	}

	public addAlert():void {
		this.alerts.push({ msg: this.msg, type: 'warning', closable: true });
		this.msg = null;
	}

    popToast(type: string) {
        this.toasterService.pop(type, 'Args Title', 'Args Body');
    }

    addToast(): void {
		this.toasterService.pop('', 'Toast', this.toastMessage );
		this.toastMessage = '';
	}
	
	ngAfterViewInit() {
        this.toasterService.pop('success', 'Toast Title', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.');
	}
}
