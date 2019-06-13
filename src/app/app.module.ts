import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PredictionComponent } from './components/prediction/prediction.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,PredictionComponent ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
