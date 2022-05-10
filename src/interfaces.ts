export interface User {
  name: string;
  age: number;
  gender: boolean;
  activated: boolean;
  contacts: [
    {
      // Phone is string because JavaScript engines interpret leading zeroes as octal numbers.
      // https://stackoverflow.com/a/67086713
      phone: string;
      email: string;
      addresses: [
        {
          country: string;
          city: string;
          street: string;
          state: string;
          zipCode: number;
        }
      ];
    }
  ];
  books: [{ bookName: string; author: string; id: number }];
}
