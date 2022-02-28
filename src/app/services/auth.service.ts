import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;
  constructor(
    private afAuth: AngularFireAuth,
    public db: AngularFirestore,
    private router: Router
  ) { 
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

 // Returns true when user is looged in
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

   // Store user in localStorage
   SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.db.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  //login function
  loginUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err))
    })
  }

  // el function el el user bey3mel be el enw password 
  changePass(password) {
    this.afAuth.currentUser.then(user => {
      console.log('current user', user.uid);
      user.updatePassword(password).then(() => {
        this.db.doc(`users/${user.uid}`).update({userPassword: true})

      })
    })
  }

  //logout function
  logoutUser() {
    return new Promise((resolve, reject) => {
      if (this.afAuth.currentUser) {
        this.afAuth.signOut()
          .then(() => {
            console.log("LOG Out");
            resolve('');
          }).catch((error) => {
            reject();
          });
      }
    })
  }
}
