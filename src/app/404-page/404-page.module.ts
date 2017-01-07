import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { pageNotFoundComponent } from './404-page.component';
import pageNotFoundRoutes from './404-page.routes';

@NgModule({
  imports: [
    CommonModule,
    pageNotFoundRoutes
  ],
  declarations: [pageNotFoundComponent]
})
export default class pageNotFoundModule { }
