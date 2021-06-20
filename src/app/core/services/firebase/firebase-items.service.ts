import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseItemsService {

  constructor(private db: AngularFirestore) { }

  async getProducts() {
    const products: any[] = [];
    const query = await this.db.collection('products').get().toPromise();
    query.forEach((doc) =>{
      const data: any = doc.data();
      const id: string = doc.id;
      products.push({
        id,
        ...data
      });
    })
    return products;
  }

  async getProduct(pid: string) {
    const query = await this.db.collection('products').doc(pid).get().toPromise();
    const id: string = query.id;
    const data: any = query.data();
    const product = {
      id,
      ...data
    };
    return product;
  }
}
