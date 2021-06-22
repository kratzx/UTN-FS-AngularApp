import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'; 

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
  declarations: [
    ProductsListComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class ProductsModule { }
