import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cards: Card[] = [];
  selectedCard?: Card;

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.getCards();
  }

  onSelect(card: Card): void {
    this.selectedCard = card;
  }

  getCards(): void {
    this.cardService.getCards()
        .subscribe(cards => this.cards = cards);
  }

}
