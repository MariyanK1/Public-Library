import { AbstractControl } from '@angular/forms';

export function onlyLetters(control: AbstractControl) {
  if (!control?.value?.match(/^[a-zA-Z]+$/)) {
    return { notOnlyLetters: true };
  }
  return null;
}

export function noEmptyInput(control: AbstractControl) {
  if (control?.value?.length < 1) {
    return { emptyInput: true };
  }
  return null;
}

export function emailValidator(control: AbstractControl) {
  const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!control?.value?.match(pattern)) {
    return { invalidEmail: true };
  }
  return null;
}
export const VALIDATORS_ONLY_LETTERS = [noEmptyInput, onlyLetters];
export const VALIDATORS_EMAIL = [noEmptyInput, emailValidator];
