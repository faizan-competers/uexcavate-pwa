import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { User } from "../models/User";


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() { }

  testUser: User = {
    email: "test",
    password: "password",
    authToken: "false"
  };

  login(email: string, password: string): Observable<any> {
    return new Observable((observer) => {
      if(email === this.testUser.email && password === this.testUser.password) {
        observer.next({email: this.testUser.email, token: "true"});
      } else {
        observer.error({err: "error"});
      }
      observer.complete();
    });
  } 

  /*
  login(email, password) {
    return new Promise((resolve, reject) => {
      if(email === validEmail && password === validPassword) {
        resolve({email, authToken});
      } else {
        reject({err: "error"});
      }
    });
  } 
  */

}
