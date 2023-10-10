import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BasicComponent } from './basic';
import { StarterComponent } from './starter/starter.component';
import { StarterDirectivesComponent } from './starter-directives/starter-directives.component';
import { TodoComponent } from './todo/todo.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ObsSampleComponent } from './obs-sample/obs-sample.component';
import { ObsSample2Component } from './obs-sample2/obs-sample2.component';
import { ObsSample3Component } from './obs-sample3/obs-sample3.component';
import { ObsSample4Component } from './obs-sample4/obs-sample4.component';
import { BeerComponent } from './beer-api/beer/beer.component';
import { CreateBeerComponent } from './beer-api/create-beer/create-beer.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    StarterComponent,
    StarterDirectivesComponent,
    TodoComponent,
    ParentComponent,
    ChildComponent,
    ObsSampleComponent,
    ObsSample2Component,
    ObsSample3Component,
    ObsSample4Component,
    BeerComponent,
    CreateBeerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
