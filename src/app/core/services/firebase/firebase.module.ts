import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyApd82LXPZ_yvL2FQKkaXhQ37YbqoeJ-xs",
  authDomain: "curso-react-ae114.firebaseapp.com",
  databaseURL: "https://curso-react-ae114-default-rtdb.firebaseio.com",
  projectId: "curso-react-ae114",
  storageBucket: "curso-react-ae114.appspot.com",
  messagingSenderId: "1039774745946",
  appId: "1:1039774745946:web:b856502c8e4ccd81e41f63",
  measurementId: "G-438JY64C77"
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
  ]
})
export class FirebaseModule { }
