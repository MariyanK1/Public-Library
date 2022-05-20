import {
  VALIDATORS_EMAIL,
  VALIDATORS_ONLY_LETTERS,
  VALIDATOR_NO_EMPTY_INPUT,
} from './validators';

export const GENERAL_INFO_INPUT: object = {
  name: ['', VALIDATORS_ONLY_LETTERS],
  age: ['', VALIDATOR_NO_EMPTY_INPUT],
  sex: ['', VALIDATOR_NO_EMPTY_INPUT],
};

export const CONTACTS_INPUT: object = {
  phone: [''],
  email: ['', VALIDATORS_EMAIL],
};

export const ADDRESS_INPUT: object = {
  country: [''],
  city: [''],
  street: [''],
  state: [''],
  zipCode: [''],
};

export const BOOK_INPUT: object = {
  bookName: [''],
  author: [''],
};
