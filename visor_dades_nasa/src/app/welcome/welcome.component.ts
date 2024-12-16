import { Component, OnInit } from '@angular/core';
import { NasaService, NasaData } from '../nasa.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  randomNasaData: NasaData | null = null;

  constructor(private nasaService: NasaService) {}

  ngOnInit(): void {
    this.nasaService.getRandomNasaData().subscribe(data => {
      this.randomNasaData = data;
    });
  }
}
