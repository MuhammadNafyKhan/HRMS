import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
