import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-404-page',
  templateUrl: './404-page.component.html',
  styleUrls: ['./404-page.component.scss']
})

export class pageNotFoundComponent {
	constructor(private _router:Router) {}
	gotoHome() {
		this._router.navigate(['dashboard','home']);
	}
}
