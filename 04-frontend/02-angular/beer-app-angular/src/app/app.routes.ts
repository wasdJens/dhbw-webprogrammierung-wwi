import { Routes } from '@angular/router';
import { BeerCreateComponent } from './ui/beer-create/beer-create.component';
import { BeerListComponent } from './ui/beer-list/beer-list.component';

export const routes: Routes = [
  {
    path: 'create', component: BeerCreateComponent,
  },
  {
    path: '', component: BeerListComponent,
  }
];
