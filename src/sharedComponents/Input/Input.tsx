import { FunctionComponent } from 'react';

interface IInput {
  type: string;
}

export const Input: FunctionComponent<IInput> = ({ type }) => {
  return <input type={type} />;
};
