import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Card } from './card';
import { CARDS } from './mock-cards';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  getCards(): Observable<Card[]> {
    const cards = of(CARDS);
    return cards;
  }
}
