import { ListService } from '../services/list.service'
import { ActivatedRoute }     from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DeckList } from '../models/decklist'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  decklist: DeckList;
  listService: ListService;
  route: ActivatedRoute;
  cards: Object;
  sideboard: Array<any>;

  constructor(listService: ListService, route: ActivatedRoute) {
      this.listService = listService;
      this.route = route;
      this.decklist = new DeckList();
      this.cards = {};
      this.sideboard = [];
  }

  ngOnInit() {
      let id = parseInt(this.route.snapshot.paramMap.get('id'));
      let deckListObserver = this.listService.getDeckList(id);
      deckListObserver.subscribe(decklist => {
        this.decklist = decklist;
        this.decklist.list = JSON.parse(decklist.list);
        this.sideboard = this.decklist.list.sideboard;
        delete this.decklist.list.sideboard;
      });

      deckListObserver.subscribe(decklist => {
        let identifiers = [];
        let parsedList = JSON.parse(decklist.list);
        for (let cardType in parsedList) {
          let cardTypeList = parsedList[cardType];
          for(let cardName of cardTypeList) {
            identifiers.push({name: cardName.substring(cardName.indexOf(' ') + 1)});
          }
        }

        this.listService.getScryfallData({identifiers: identifiers})
        .subscribe(cards => {
            for(let card of cards.data) {
                this.cards[card["name"]] = card["image_uris"]["normal"];
            }
        });
      });
  }

  getCardName(unparsedcard) {
    return unparsedcard.substring(unparsedcard.indexOf(' ') + 1);
  }

  getCardNumber(unparsedcard) {
    return parseInt(unparsedcard.substring(0, unparsedcard.indexOf(' ') + 1));
  }

  getSum(cardSection) {
    let count = 0;
    for(let card of cardSection) {
      count+=this.getCardNumber(card);
    }

    return count;
  }

}
