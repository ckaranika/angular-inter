import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { UilibPrimengModule } from '@shared/modules/uilib-primeng.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from '@pages/home/home.component';
import { NotFoundPageComponent } from '@pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UilibPrimengModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
