import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyDzematComponent } from './my-dzemat/my-dzemat.component';
import { EventsComponent } from './events/events.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { UserComponent } from './user/user.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AppRoutingModule} from "./app-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    MyDzematComponent,
    EventsComponent,
    KontaktComponent,
    UserComponent,
    ImpressumComponent,
    PageNotFoundComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
