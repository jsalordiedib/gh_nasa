import { Component, OnInit } from '@angular/core';
import { NasaService, NasaData } from '../nasa.service';

@Component({
  selector: 'app-nasa-data',
  templateUrl: './nasa-data.component.html',
  styleUrls: ['./nasa-data.component.css']
})
export class NasaDataComponent implements OnInit {
  nasaData: NasaData[] = [];
  currentPage = 1;
  totalPages = 1;
  perPage = 10;

  constructor(private nasaService: NasaService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.nasaService.getNasaData(this.currentPage, this.perPage).subscribe(data => {
      this.nasaData = data;
      this.totalPages = Math.ceil(data.length / this.perPage);
    });
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

