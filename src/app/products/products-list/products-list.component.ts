import { Component, OnInit } from '@angular/core';
import { FirebaseItemsService } from '../../core/services/firebase/firebase-items.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  providers: [FirebaseItemsService]
})
export class ProductsListComponent implements OnInit {

  products:any[];
  state:any;

  constructor(
    public db: FirebaseItemsService
  ) {}

  ngOnInit(): void {
    this.state = 'loading';
    this.db.getProducts().then((products) => {
      this.state = 'ready';
      this.products = products;
    })
  }
}
