import { ChangeEvent, DOMAttributes, FunctionComponent } from 'react';

interface IInputProps extends DOMAttributes<HTMLElement> {
  type?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const Input: FunctionComponent<IInputProps> = ({ type, onChange, value, className }) => {
  return <input type={type} onChange={onChange} value={value} className={className} />;
};
