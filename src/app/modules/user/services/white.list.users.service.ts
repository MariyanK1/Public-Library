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

  check(): boolean {
    return true;
  }
}
