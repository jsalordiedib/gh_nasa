import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface NasaData {
  title: string;
  url: string;
  explanation: string;
}

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  private apiUrl = 'https://api.nasa.gov/planetary/apod';  // L'endpoint de l'API de la NASA
  private apiKey = 'LA TEVA CLAU API';  // Substitueix aquesta línia amb la teva clau API

  constructor(private http: HttpClient) { }

  getNasaData(page: number, perPage: number): Observable<NasaData[]> {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('page', page.toString())
      .set('per_page', perPage.toString());

    return this.http.get<NasaData[]>(this.apiUrl, { params }).pipe(
      tap(data => console.log('Dades de NASA rebudes:', data))  // Afegeix el log per veure les dades
    );
  }
}
