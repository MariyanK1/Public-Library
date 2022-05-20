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

  switchGender(user: User, users: User[]): User[] {
    const male = 'male';
    const female = 'female';
    return users.map((e, i) => {
      if (e === user) {
        return (users[i] = {
          ...user,
          generalInfo: {
            ...user.generalInfo,
            sex: user.generalInfo.sex === male ? female : male,
          },
        });
      }

      return e;
    });
  }

  onActivate(user: User, users: User[]): User[] {
    return users.map((singleUser) => {
      if (singleUser === user) {
        singleUser.activated = !user.activated;
      }

      return singleUser;
    });
  }

  activateUsers(activateAllUsers: boolean, users: User[]): User[] {
    return users.map((e, i) => {
      const user = users[i];
      if (activateAllUsers) {
        return (users[i] = { ...user, activated: true });
      } else {
        return (users[i] = { ...user, activated: false });
      }
    });
  }
}
