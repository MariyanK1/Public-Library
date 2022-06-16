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
    https://api.github.com/users/${value}?client_id=f508c10ffe82594dfba6&client_secret=7cd69945aac77deceb9f7261c4acc243ddd0a704
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
