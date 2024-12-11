import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // Assegura't que estigui afegit
import { AppComponent } from './app.component';
import { NasaDataComponent } from './nasa-data/nasa-data.component';
import { NasaService } from './nasa.service';

@NgModule({
  declarations: [
    AppComponent,
    NasaDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule  // Ha d'estar aquí
  ],
  providers: [NasaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
