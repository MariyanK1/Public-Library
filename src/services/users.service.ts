import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FEMALE, MALE } from 'src/constants';

import { User } from 'src/interfaces';
import { USERS } from 'src/mock-data';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  get(): Observable<User[]> {
    return of(USERS);
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

 
}
