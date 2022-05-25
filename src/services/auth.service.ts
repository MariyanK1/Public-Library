import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public canActivate: boolean = false;
  checkUser(userExist: boolean): boolean {
    this.canActivate = userExist;
    return this.canActivate;
  }

  isLoggedIn(): Observable<boolean> {
    return of(this.canActivate).pipe(delay(500));
  }
}
