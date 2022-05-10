import { User } from './interfaces';

export const USERS: User[] = [
  {
    name: 'Mariyan',
    age: 19,
    gender: true,
    activated: false,
    contacts: [
      {
        phone: '0899',
        email: 'x@abv.bg',
        addresses: [
          {
            country: 'BG',
            city: 'Ruse',
            street: 'Omurtag',
            state: 'CA',
            zipCode: 23242,
          },
        ],
      },
    ],
    books: [{ bookName: 'x', author: 'x', id: 1 }],
  },
];
