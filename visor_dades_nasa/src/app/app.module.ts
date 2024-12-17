import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NasaDataComponent } from './nasa-data/nasa-data.component';
import { NasaService } from './nasa.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { ApodComponent } from './apod/apod.component'; // Importa AppRoutingModule

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'nasa-data', component: NasaDataComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NasaDataComponent,
    WelcomeComponent,
    ApodComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppRoutingModule // Afegeix AppRoutingModule a la secció imports
  ],
  providers: [NasaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
