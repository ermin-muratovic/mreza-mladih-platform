import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyDzematComponent } from './my-dzemat/my-dzemat.component';
import { EventsComponent } from './events/events.component';
import { KontaktComponent } from './kontakt/kontakt.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'events', component: EventsComponent },
  { path: 'myDzemat', component: MyDzematComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    MyDzematComponent,
    EventsComponent,
    KontaktComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
