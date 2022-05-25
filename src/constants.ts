export const MALE: string = 'male';
export const FEMALE: string = 'female';
export const ERR_DICTIONARY: errDict = {
  required: 'This field is required!',
  invalidEmail: `Doesn't look like a valid mail!`,
  notOnlyLetters: 'This field requires only letters!',
};

type errDict = {
  [key: string]: string;
};
