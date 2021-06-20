import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonfyItemsService {

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get('https://jsonfy.com/items');
  }

  getItem( id: string ) {
    return this.http.get('https://jsonfy.com/items/' + id);
  }
}
