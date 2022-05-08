import { Injectable } from '@angular/core';

import { User } from 'src/interfaces';
import { USERS } from 'src/mock-data';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  get(): User[] {
    return USERS;
  }

  switchGender(user: User, users: User[]): void {
    for (let i = 0; i < users.length; i++) {
      const element = users[i];

      if (element === user) {
        users[i] = { ...user, gender: !user.gender };
      }
    }
  }

  onActivate(user: User, users: User[]): User[] {
    return users.map((singleUser) => {
      if (singleUser === user) {
        singleUser.activated = !user.activated;
      }

      return singleUser;
    });
  }

  activateUsers(activateAllUsers: boolean, users: User[]): void {
    for (let i = 0; i < users.length; i++) {
      const element = users[i];

      if (activateAllUsers) {
        users[i] = { ...element, activated: true };
      } else {
        users[i] = { ...element, activated: false };
      }
    }
  }
}
