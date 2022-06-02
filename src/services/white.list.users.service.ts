import { Injectable } from '@angular/core';
import { WhiteListUser } from 'src/interfaces';
import { WHITE_LIST_USERS } from 'src/mock-data';

@Injectable({
  providedIn: 'root',
})
export class WhiteListUsersService {
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
