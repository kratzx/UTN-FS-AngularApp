import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseItemsService } from 'src/app/core/services/firebase/firebase-items.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [FirebaseItemsService]
})
export class ProductDetailComponent implements OnInit {

  product: any;
  state: any;

  constructor(
    public db: FirebaseItemsService,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.state = 'loading';
    this.route.params
      .subscribe( (params) => {
        const id = params['id'].toString();
        this.db.getProduct(id).then((product) => {
          this.state = 'ready';
          this.product = product;
        });
      })
  }

}
