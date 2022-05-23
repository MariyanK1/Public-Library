import { AbstractControl, Validators } from '@angular/forms';

export const VALIDATORS_ONLY_LETTERS = [Validators.required, onlyLetters];
export const VALIDATORS_EMAIL = [Validators.required, emailValidator];
export const VALIDATOR_NO_EMPTY_INPUT = [Validators.required];

function onlyLetters(control: AbstractControl) {
  if (!control?.value?.match(/^[a-zA-Z]+$/) || !control.value) {
    return { notOnlyLetters: true };
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
