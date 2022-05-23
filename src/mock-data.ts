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
