import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { NasaDataComponent } from './nasa-data/nasa-data.component';
import { ApodComponent } from './apod/apod.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'nasa-data', component: NasaDataComponent },
  { path: 'apod', component: ApodComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }