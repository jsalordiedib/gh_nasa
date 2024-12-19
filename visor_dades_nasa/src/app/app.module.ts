import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NasaDataComponent } from './nasa-data/nasa-data.component';
import { NasaService } from './nasa.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { ApodComponent } from './apod/apod.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'nasa-data', component: NasaDataComponent },
  { path: 'apod', component: ApodComponent },
  { path: 'calendar', component: CalendarComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NasaDataComponent,
    WelcomeComponent,
    ApodComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [NasaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
