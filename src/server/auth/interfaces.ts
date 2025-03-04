export interface SignUpData {
  name: string;
  email: string;
  password: string;
  cpf: string;
  cellphone: string;
  birthday: string;
  confirmPassword: string;
}

export interface SignInData {
  email: string;
  password: string;
}

export interface SignInWithPasswordData {
  email: string;
}
