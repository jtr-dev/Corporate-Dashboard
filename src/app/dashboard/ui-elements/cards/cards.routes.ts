import { Route, RouterModule } from '@angular/router';
import { CardsComponent } from './cards.component';

const cardsRoutes: Route[] = [
    { path: '', component: CardsComponent }
];

export default RouterModule.forChild(cardsRoutes);
