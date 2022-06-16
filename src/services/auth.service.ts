import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isUserLoggedIn = new BehaviorSubject<boolean>(false);
  private isUserLoggedIn$ = this.isUserLoggedIn.asObservable();

  public canActivate: boolean = false;

  setUser(exist: boolean) {
    return this.isUserLoggedIn.next(exist);
  }
  // checkUser(userExist: boolean): boolean {
  //   this.canActivate = userExist;
  //   return this.canActivate;
  // }

  isLoggedIn() {
    return this.isUserLoggedIn$;
  }

  // signOut(): boolean {
  //   return this.checkUser(false);
  // }
}
