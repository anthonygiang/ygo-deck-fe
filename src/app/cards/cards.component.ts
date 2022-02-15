import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CARDS } from '../mock-cards';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cards: Card[] = [];
  selectedCard?: Card;

  constructor() { }

  ngOnInit(): void {
    this.getCards();
  }

  onSelect(card: Card): void {
    this.selectedCard = card;
  }

  getCards(): void {
    this.cards = CARDS;
  }

}
