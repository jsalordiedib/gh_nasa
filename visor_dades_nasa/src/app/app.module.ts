import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NasaDataComponent } from './nasa-data/nasa-data.component';
import { NasaService } from './nasa.service';

const routes: Routes = [
  { path: '', component: NasaDataComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NasaDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [NasaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
