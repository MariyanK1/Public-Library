import { Injectable } from '@angular/core';
import { WhiteListUsers } from 'src/interfaces';
import { WHITE_LIST_USERS } from 'src/mock-data';

@Injectable({
  providedIn: 'root',
})
export class WhiteListUsersService {
  get(): WhiteListUsers[] {
    return WHITE_LIST_USERS;
  }
}
