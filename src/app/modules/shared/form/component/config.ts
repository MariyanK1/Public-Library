import {
  noEmptyInput,
  VALIDATORS_EMAIL,
  VALIDATORS_ONLY_LETTERS,
} from './validators';

export const GENERAL_INFO_INPUT: object = {
  name: ['', VALIDATORS_ONLY_LETTERS],
  age: ['', [noEmptyInput]],
  sex: ['', [noEmptyInput]],
};

export const CONTACTS_INPUT: object = {
  phone: [''],
  email: ['', VALIDATORS_EMAIL],
};

export const ADDRESS_INPUT: object = {
  country: [{ value: '', disabled: true }],
  city: [{ value: '', disabled: true }],
  street: [{ value: '', disabled: true }],
  state: [{ value: '', disabled: true }],
  zipCode: [{ value: '', disabled: true }],
};

export const BOOK_INPUT: object = {
  bookName: [''],
  author: [''],
};
