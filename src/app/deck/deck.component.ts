import { ListService } from '../services/list.service'
import { Component, OnInit } from '@angular/core';
import { DeckList } from '../models/decklist'

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {

  private signatureCards: Object;
  private deckLists: DeckList[];
  private listService: ListService;

  constructor(listService: ListService) {
      this.listService = listService;
      this.signatureCards = {};
  }

  ngOnInit() {
      var decklistObserver = this.listService.getDecks();
        
      decklistObserver.subscribe(decklists => this.deckLists = decklists);
      decklistObserver.subscribe(decklists => {
        let identifiers = []
        for (var i = decklists.length - 1; i >= 0; i--) {
          let cardName = decklists[i].signature_card;
          identifiers.push({name: cardName});
        }

        this.listService.getScryfallData({identifiers: identifiers})
            .subscribe(cards => {
                console.log(cards);
                for(let card of cards.data) {
                    this.signatureCards[card["name"]] = card["image_uris"]["normal"];
                }
            });
      });
  }

}
