import { Component, OnInit } from '@angular/core';
import { NasaService, NasaData } from '../nasa.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  apodData: NasaData[] = [];

  constructor(private nasaService: NasaService) {}

  ngOnInit(): void {
    this.fetchApodData();
  }

  fetchApodData(): void {
    const dates = this.generateDates(7); // Obtenir les dates dels últims 7 dies
    this.nasaService.getNasaData(dates).pipe(take(1)).subscribe({
      next: (data: NasaData[]) => {
        console.log('Dades rebudes:', data); // Afegir log per veure les dades rebudes
        this.apodData = data;
        console.log('Dates APOD:', this.apodData); // Afegir log per veure les dates APOD
      },
      error: (error: any) => {
        console.error("Error en la petició a l'API:", error);
        alert("Has superat el límit de peticions a l'API de la NASA. Si us plau, intenta-ho més tard.");
      }
    });
  }

  generateDates(days: number): string[] {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < days; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      dates.push(date.toISOString().split('T')[0]);
    }
    return dates;
  }
}
