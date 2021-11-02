import { DOMAttributes, FunctionComponent, SyntheticEvent } from 'react';

interface IInputProps extends DOMAttributes<HTMLElement> {
  type?: string;
  onClick?: (event: SyntheticEvent) => void;
  shouldConcatHref?: boolean;
  onChange?: (event: SyntheticEvent) => void;
}

export const Input: FunctionComponent<IInputProps> = ({ type, onClick }) => {
  return <input type={type} onClick={onClick} />;
};
