import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CurrencyComponent } from "./components/currency/currency.component";
import { WeatherComponent } from ".//components/weather/weather.component";
import { MovieComponent } from ".//components/movie/movie.component";

const MAINMENU_ROUTES: Routes = [
  //full : makes sure the path is absolute path
  { path: '', redirectTo: '/weather', pathMatch: 'full' },
  { path: 'weather', component: WeatherComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'currency', component: CurrencyComponent } 
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(MAINMENU_ROUTES)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
