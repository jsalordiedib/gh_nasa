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
    this.nasaService.getApod().subscribe(data => {
      this.apodData = data;
    });
  }
}
