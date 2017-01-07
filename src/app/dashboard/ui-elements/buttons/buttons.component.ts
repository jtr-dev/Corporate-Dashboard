import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})

export class ButtonsComponent implements OnInit {
	ngOnInit() {
		[].slice.call( document.querySelectorAll( 'button.progress-button' ) ).forEach( function( bttn:any ) {
			var button = new ProgressButton( bttn, {
				callback : function( instance:any ) {
					var progress = 0,
					interval = setInterval( function() {
						progress = Math.min( progress + Math.random() * 0.1, 1 );
						instance._setProgress( progress );

						if( progress === 1 ) {
							instance._stop(1);
							clearInterval( interval );
						}
					}, 200 );
				}
			} );
			console.log(button);
			console.clear();
		} );
	}
}
