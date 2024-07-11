import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CounterModule } from './counter/counter.module';
import { DdzModule } from './bdz/bdz.module';

import { HeroComponent } from './heroes/hero/hero.component';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,



  ],
  imports: [
    BrowserModule,
    CounterModule,
    AppRoutingModule,
    DdzModule
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
