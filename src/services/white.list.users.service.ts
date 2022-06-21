import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WhiteListUser } from 'src/interfaces';
import { WHITE_LIST_USERS } from 'src/mock-data';

@Injectable({
  providedIn: 'root',
})
export class WhiteListUsersService {
  constructor(private http: HttpClient) {}

  checkUserExist(value: string): Observable<any> {
    const URL = `
    https://api.github.com/users/${value}?client_id=87a71ee8153d8849757dclient_secret=29c62daf81f9e15768dcb956075105b868607def
    `;
    return this.http.get(URL);
  }

  get(): WhiteListUser[] {
    return WHITE_LIST_USERS;
  }

  check(user: WhiteListUser): boolean {
    return WHITE_LIST_USERS.some((x) => {
      if (x.email === user.email && x.password === user.password) {
        localStorage.setItem('permissions', JSON.stringify(x.permission));
        return true;
      }

      return false;
    });
  }
}
