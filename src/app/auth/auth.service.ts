import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userIsAuthenticated = true;
  private _userId = 'abc';
  constructor() { }

  get userID() {
    return this._userId;
  }
  get isAuthenticated() {
    return this.userIsAuthenticated;
  }

  login() {
    this.userIsAuthenticated = true;
  }

  logout() {
    this.userIsAuthenticated = false;
  }
}
