import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { DeckList } from '../models/decklist';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private env = environment;
  private decksUrl : string;
  private listsUrl : string;

  constructor(
    private http: HttpClient) { 
    this.decksUrl = `${this.env.apiUrl}/decks`;
    this.listsUrl = `${this.env.scryfallUrl}/cards/collection`;
  }

  getDecks() : Observable<DeckList[]>  {
    return this.http.get<DeckList[]>(this.decksUrl);
  }

  getDeckList(listId: number): Observable<DeckList> {
    return this.http.get<DeckList>(`${this.decksUrl}/${listId}`);
  }

  getScryfallData(identifiers: any) : Observable<any> {
    return this.http.post<any>(this.listsUrl, identifiers);
  }

}
