import { Component } from '@angular/core';
import { FirebaseItemsService } from './core/services/firebase/firebase-items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseItemsService]
})
export class AppComponent {
  title = 'UTN-FS-AngularApp';
  constructor(public serv: FirebaseItemsService) { }

  ngOnInit(): void {
  }

  async items() {
    const items = await this.serv.getProducts();
    console.log(items)
  }

  async item() {
    const item = await this.serv.getProduct('8QHZQ80GrpS4X6Cdv7FR');
    console.log(item);
  }
}
