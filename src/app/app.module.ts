import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouterModule } from './routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FlightdetailsComponent } from './components/flightdetails/flightdetails.component';
import { ShowreservationComponent } from './components/showreservation/showreservation.component';
import { ConfirmreservationComponent } from './components/confirmreservation/confirmreservation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FlightdetailsComponent,
    ShowreservationComponent,
    ConfirmreservationComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
