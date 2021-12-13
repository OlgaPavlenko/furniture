import { FunctionComponent } from 'react';

export interface IAuthData {
  password: string;
  email: string;
}

export interface ILoginData {
  password: string;
  email: string;
}

export interface IAuthInitialState {
  userId: string | null;
}

type TFieldsNames = 'email' | 'password' | 'confirmPassword';

export interface IField {
  fullWidth: boolean;
  name: TFieldsNames;
  label: string;
  type: string;
}

export const registrationFormFields: IField[] = [
  {
    fullWidth: true,
    name: 'email',
    label: 'email',
    type: 'text',
  },
  {
    fullWidth: true,
    name: 'password',
    label: 'password',
    type: 'password',
  },
  {
    fullWidth: true,
    name: 'confirmPassword',
    label: 'confirmPassword',
    type: 'password',
  },
];

export interface IPrivateRouteProps {
  path: string;
  component: FunctionComponent;
  id?: string;
  exact?: boolean;
}

export interface IAuth {
  userId: string;
}

export interface IStoreState {
  auth: IAuth;
}
