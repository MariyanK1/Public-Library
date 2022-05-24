export interface User {
  generalInfo: {
    name: string;
    age: number;
    sex: string;
  };
  contacts: {
    phone: string;
    email: string;
  };
  address: {
    country: string;
    city: string;
    street: string;
    state: string;
    zipCode: number;
  };
  books: [{ bookName: string; author: string; id: number }];
  activated: boolean;
}

export interface WhiteListUser {
  email: string;
  password: string;
}
