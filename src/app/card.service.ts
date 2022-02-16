import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { environment } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http';
import { Card } from './card';
import { CARDS } from './mock-cards';

const apiEndpoint = environment.apiUrl + '/api/cards/'

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(apiEndpoint)
  }
}
