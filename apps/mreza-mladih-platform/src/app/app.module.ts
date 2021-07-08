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
import { UserComponent } from './user/user.component';
import { ImpressumComponent } from './impressum/impressum.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'events', component: EventsComponent },
  { path: 'myDzemat', component: MyDzematComponent },
  { path: 'impressum', component: ImpressumComponent },
];

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
    ImpressumComponent],
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
