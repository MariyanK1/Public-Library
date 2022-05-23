import { User } from './interfaces';

export const USERS: User[] = [
  {
    address: {
      country: 'BG',
      city: 'Ruse',
      street: 'Omurtag',
      state: 'CA',
      zipCode: 23242,
    },
    generalInfo: {
      name: 'Mariyan',
      age: 19,
      sex: 'male',
    },
    contacts: {
      phone: '0899',
      email: 'x@abv.bg',
    },
    books: [{ bookName: 'x', author: 'x', id: 1 }],
    activated: false,
  },
];

export const WHITE_LIST_USERS = [
  { email: 'test@abv.bg', password: '123456' },
  { email: 'test1@abv.bg', password: '123456' },
];
