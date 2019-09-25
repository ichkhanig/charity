import { Injectable } from '@angular/core';
//import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  //isFirebaseAuth = false;
  isAuth = false;
  isSuperAdmin = false;

  constructor() {
    /*firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isFirebaseAuth = true;
      } else {
        this.isFirebaseAuth = false;
      }
    });*/
  }

  get signIn() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.isAuth = true;
            resolve(true);
          }, 1200
        );
      }
    );
  }

  get signAsSuperAdmin() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.isSuperAdmin = true;
            this.isAuth = true;
            resolve(true);
          }, 1200
        );
      }
    );
  }

  signOut() {
    this.isAuth = false;
    this.isSuperAdmin = false;
  }

  /*signUpFirebaseUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password).then(
        (user) => {
          resolve(user);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  signInFirebaseUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password).then(
        (user) => {
          resolve(user);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  signOutFirebaseUser() {
    firebase.auth().signOut();
  }*/
}
