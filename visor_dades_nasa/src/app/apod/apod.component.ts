import { Component, OnInit } from '@angular/core';
import { NasaService, NasaData } from '../nasa.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.css']
})
export class ApodComponent implements OnInit {
  apodData: NasaData | null = null;

  constructor(private nasaService: NasaService) {}

  ngOnInit(): void {
    this.nasaService.getApod().subscribe(
      (data: NasaData) => {
        this.apodData = data;
      },
      (error: any) => {
        console.error("Error en la petició a l'API:", error);
        alert("Has superat el límit de peticions a l'API de la NASA. Si us plau, intenta-ho més tard.");
      }
    );
  }
}
