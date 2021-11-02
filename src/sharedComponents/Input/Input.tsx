import { ChangeEvent, DOMAttributes, FunctionComponent, SyntheticEvent } from 'react';

interface IInputProps extends DOMAttributes<HTMLElement> {
  type?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FunctionComponent<IInputProps> = ({ type, onChange }) => {
  return <input type={type} onChange={onChange} />;
};
