import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BeerListComponent } from './components/lists/beer-list/beer-list.component';
import { BeerList2Component } from './components/lists/beer-list2/beer-list2.component';
import { BeerList3Component } from './components/lists/beer-list3/beer-list3.component';
import { BeerDetailComponent } from './components/beer-detail/beer-detail.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'beers',
        component: BeerListComponent,
      },
      {
        path: 'beers2',
        component: BeerList2Component,
      },
      {
        path: 'beers3',
        component: BeerList3Component,
      },
      {
        path: 'beers/:beerId',
        component: BeerDetailComponent,
      },
    ],
  },
];
