export interface ISignIn {
  username: string;
  password: string;
}

export interface ISignUp {
  username: string;
  password: string;
}

export interface IToken {
  jwt: string;
}

export interface IUsernameValid {
  isValid: boolean;
  message: string;
}
