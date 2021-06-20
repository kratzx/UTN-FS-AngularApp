import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseModule } from './services/firebase/firebase.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FirebaseModule
  ]
})
export class CoreModule { }
