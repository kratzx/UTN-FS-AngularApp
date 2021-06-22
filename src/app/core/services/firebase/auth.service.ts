import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  registerForm: any;
  loginForm: any;
  userID: any;

  constructor(
    private fbAuth: AngularFireAuth, 
    private fbStore: AngularFirestore
  ) { }

  async createUser( form: any ) {
    this.registerForm = form;
    try {
      const fbRes = await this.fbAuth
        .createUserWithEmailAndPassword(
          this.registerForm.email, 
          this.registerForm.password);
      this.userID = fbRes.user?.uid;
      if (this.userID)
        await this.saveUserData();
    }
    catch (e) {
      throw new Error(e);
    }
  }

  private async saveUserData() {
    try {
      this.fbStore.collection('users').doc(this.userID).set({
        nombre: this.registerForm.nombre,
        apellido: this.registerForm.apellido,
        telefono: this.registerForm.telefono,
        email: this.registerForm.email,
        userId: this.userID
      })
    }
    catch (e) {
      throw new Error (e);
    }
  }

  async login( form: any ) { 
    this.loginForm = form;
    try {
      const fbRes = await this.fbAuth
        .signInWithEmailAndPassword( 
          this.loginForm.email, 
          this.loginForm.password);
      this.userID = fbRes.user?.uid;
      if (this.userID) {
        await this.loadUserData();
        return true;
      }
      return false;
    }
    catch (e) {
      throw new Error(e);
    }
  }

  private async loadUserData() {
    try {
      const query = await this.fbStore
        .collection('users')
        .doc(this.userID).get().toPromise();
      const userData:any = query.data();
      for (const [key, value] of Object.entries(userData)) {
        sessionStorage.setItem(key, JSON.stringify(value))
      }
    }
    catch (e) {
      throw new Error(e);
    }
  }

  logout() {
    sessionStorage.clear();
  }

}
