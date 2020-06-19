import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from './../environments/environment.prod';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [AppComponent, CardComponent],
  imports: [
    GooglePlaceModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
