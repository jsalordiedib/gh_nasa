import { Component, OnInit } from '@angular/core';
import { NasaService } from '../nasa.service';

@Component({
  selector: 'app-nasa-data',
  templateUrl: './nasa-data.component.html',
  styleUrls: ['./nasa-data.component.css']
})
export class NasaDataComponent implements OnInit {

  nasaData: any[] = [];  // Emmagatzemem les dades de l'API
  currentPage: number = 1;  // Pàgina actual
  perPage: number = 5;      // Dades per pàgina
  totalPages: number = 0;   // Nombre total de pàgines

  constructor(private nasaService: NasaService) { }

  ngOnInit(): void {
    this.loadData();  // Carreguem les dades quan el component s'inicialitza
  }

  loadData(): void {
    this.nasaService.getNasaData(this.currentPage, this.perPage).subscribe(data => {
      this.nasaData = data; // Guardem les dades que venen de l'API
      // Si l'API inclou informació sobre el total de pàgines, el podem calcular així:
      this.totalPages = Math.ceil(data.length / this.perPage);
    });
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadData();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadData();
    }
  }
}

