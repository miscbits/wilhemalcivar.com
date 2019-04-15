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

  private deckList: DeckList;
  private listService: ListService;
  private route: ActivatedRoute;

  constructor(listService: ListService, route: ActivatedRoute) {
      this.listService = listService;
      this.route = route;
  }

  ngOnInit() {
      let id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.listService.getDeckList(id)
          .subscribe(decklist => this.deckList = decklist);
  }

}
