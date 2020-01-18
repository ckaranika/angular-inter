import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UilibPrimengModule } from '@shared/modules/uilib-primeng.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from '@pages/home/home.component';
import { NotFoundPageComponent } from '@pages/not-found/not-found.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { FooterComponent } from '@shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NotFoundPageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    UilibPrimengModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
