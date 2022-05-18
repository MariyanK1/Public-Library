import { AbstractControl } from '@angular/forms';

export const VALIDATORS_ONLY_LETTERS = [noEmptyInput, onlyLetters];
export const VALIDATORS_EMAIL = [noEmptyInput, emailValidator];
export const VALIDATOR_NO_EMPTY_INPUT = [noEmptyInput];

function onlyLetters(control: AbstractControl) {
  if (!control?.value?.match(/^[a-zA-Z]+$/) || control === null) {
    return { notOnlyLetters: true };
  }
  return null;
}

function noEmptyInput(control: AbstractControl) {
  if (!control.value) {
    return { emptyInput: true };
  }
  return null;
}

function emailValidator(control: AbstractControl) {
  const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!control?.value?.match(pattern)) {
    return { invalidEmail: true };
  }
  return null;
}
