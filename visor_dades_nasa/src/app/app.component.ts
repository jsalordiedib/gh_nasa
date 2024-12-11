import { Component } from '@angular/core';
import { NasaService, NasaData } from './nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'visor_dades_nasa';
  nasaData: NasaData[] = [];
  currentPage = 1;
  totalPages = 1;
  perPage = 10;

  constructor(private nasaService: NasaService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    const dates = this.generateDates(this.currentPage, this.perPage);
    this.nasaService.getNasaData(dates).subscribe(data => {
      this.nasaData = data;
      this.totalPages = Math.ceil(30 / this.perPage); // Suposem que hi ha 30 dies de dades disponibles
    });
  }

  generateDates(page: number, perPage: number): string[] {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < perPage; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - ((page - 1) * perPage + i));
      dates.push(date.toISOString().split('T')[0]);
    }
    return dates;
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchData();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.fetchData();
    }
  }
}
