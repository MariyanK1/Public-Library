import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActiveUsersService {
  private _activeUsers = new BehaviorSubject<number>(0);
  private _activeUsers$ = this._activeUsers.asObservable();

  getActiveUsers(): Observable<number> {
    return this._activeUsers$;
  }

  setActiveUser(latestValue: number): void {
    return this._activeUsers.next(latestValue);
  }
}
