import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export interface NasaData {
  title: string;
  url: string;
  explanation: string;
}

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private apiUrl = 'https://api.nasa.gov/planetary/apod';
  private apiKey = 'DZbgaxexmi8LcfEXVie40fBuWlG7PadJ7OfH9Wyp'; // Substitueix per la teva clau API

  constructor(private http: HttpClient) {}

  getNasaData(page: number, perPage: number): Observable<NasaData[]> {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('page', page.toString())
      .set('per_page', perPage.toString());
    return this.http.get<NasaData[]>(this.apiUrl, { params }).pipe(
      tap(data => console.log('Dades rebudes de l\'API:', data)),
      catchError(error => {
        console.error('Error en la petició a l\'API:', error);
        return of([]); // Retorna un array buit en cas d'error
      })
    );
  }
}
