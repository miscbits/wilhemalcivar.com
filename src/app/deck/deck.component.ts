import { ListService } from '../services/list.service'
import { Component, OnInit } from '@angular/core';
import { DeckList } from '../models/decklist'

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {

  private deckLists: DeckList[];
  private listService: ListService;

  constructor(listService: ListService) {
      this.listService = listService;
  }

  ngOnInit() {
      this.listService.getDecks()
          .subscribe(decklists => this.deckLists = decklists);
  }

}
