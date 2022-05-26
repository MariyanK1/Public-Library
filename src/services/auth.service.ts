import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public canActivate: boolean = false;

  checkUser(userExist: boolean): boolean {
    this.canActivate = userExist;
    return this.canActivate;
  }

  isLoggedIn(): boolean {
    return this.canActivate;
  }

  signOut(): boolean {
    return this.checkUser(false);
  }
}
