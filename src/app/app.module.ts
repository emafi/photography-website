import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UrbanComponent } from './home/urban/urban.component';
import { NatureComponent } from './home/nature/nature.component';
import { PeopleComponent } from './home/people/people.component';
import { BoudoirComponent } from './home/boudoir/boudoir.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { HomeBarComponent } from './shared/home-bar/home-bar.component';
import { FooterContactComponent } from './shared/footer-contact/footer-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UrbanComponent,
    NatureComponent,
    PeopleComponent,
    BoudoirComponent,
    NavBarComponent,
    HomeBarComponent,
    FooterContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
