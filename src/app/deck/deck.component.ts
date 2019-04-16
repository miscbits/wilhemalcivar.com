import { ListService } from '../services/list.service'
import { Component, OnInit } from '@angular/core';
import { DeckList } from '../models/decklist'

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {

  signatureCards: Object;
  deckLists: DeckList[];
  listService: ListService;

  constructor(listService: ListService) {
      this.listService = listService;
      this.signatureCards = {};
  }

  ngOnInit() {
      var decklistObserver = this.listService.getDecks();
        
      decklistObserver.subscribe(decklists => this.deckLists = decklists);
      decklistObserver.subscribe(decklists => {
        let identifiers = []
        for (let decklist of decklists) {
          let cardName = decklist.signature_card;
          identifiers.push({name: cardName});
        }

        this.listService.getScryfallData({identifiers: identifiers})
            .subscribe(cards => {
                for(let card of cards.data) {
                    this.signatureCards[card["name"]] = card["image_uris"]["normal"];
                }
            });
      });
  }

}
