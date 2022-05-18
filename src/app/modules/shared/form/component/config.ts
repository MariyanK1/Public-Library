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
