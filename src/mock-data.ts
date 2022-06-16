import { User, WhiteListUser } from './interfaces';

export const USERS: User[] = [
  {
    address: {
      country: 'BG',
      city: 'Ruse',
      street: 'Omurtag',
      state: 'CA',
      zipCode: 23242,
    },
    userInfoForm: {
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
  {
    address: {
      country: 'BG',
      city: 'Ruse',
      street: 'Omurtag',
      state: 'CA',
      zipCode: 23242,
    },
    userInfoForm: {
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
  {
    address: {
      country: 'BG',
      city: 'Ruse',
      street: 'Omurtag',
      state: 'CA',
      zipCode: 23242,
    },
    userInfoForm: {
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
  {
    address: {
      country: 'BG',
      city: 'Ruse',
      street: 'Omurtag',
      state: 'CA',
      zipCode: 23242,
    },
    userInfoForm: {
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
  {
    address: {
      country: 'BG',
      city: 'Ruse',
      street: 'Omurtag',
      state: 'CA',
      zipCode: 23242,
    },
    userInfoForm: {
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
  {
    address: {
      country: 'BG',
      city: 'Ruse',
      street: 'Omurtag',
      state: 'CA',
      zipCode: 23242,
    },
    userInfoForm: {
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
  {
    address: {
      country: 'BG',
      city: 'Ruse',
      street: 'Omurtag',
      state: 'CA',
      zipCode: 23242,
    },
    userInfoForm: {
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
  {
    address: {
      country: 'BG',
      city: 'Ruse',
      street: 'Omurtag',
      state: 'CA',
      zipCode: 23242,
    },
    userInfoForm: {
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

export const WHITE_LIST_USERS: WhiteListUser[] = [
  {
    email: 'test@abv.bg',
    password: '123456',
    permission: ['edit-user', 'add-user'],
  },
  { email: 'test1@abv.bg', password: '1234567', permission: ['edit-user'] },
];
