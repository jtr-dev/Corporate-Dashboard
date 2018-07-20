import { Component } from '@angular/core';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})

export class AppComponent {
  constructor() { }
}
