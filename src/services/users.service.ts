import { Injectable } from '@angular/core';
import { FEMALE, MALE } from 'src/constants';

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
    return users.map((e, i) => {
      if (e === user) {
        return (users[i] = {
          ...user,
          userInfoForm: {
            ...user.userInfoForm,
            sex: user.userInfoForm.sex === MALE ? FEMALE : MALE,
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