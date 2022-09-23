import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'user/:userId',
    component: UserComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'parent',
    component: ParentComponent,
    children: [
      {
        path: 'child-a',
        component: ChildAComponent
      },
      {
        path: 'child-b',
        component: ChildBComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
