import { ButtonHTMLAttributes, DOMAttributes, FunctionComponent } from 'react';

interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    DOMAttributes<HTMLButtonElement> {
  text?: string;
  label?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button: FunctionComponent<IButtonProps> = ({ text, label, className, onClick }) => {
  if (label) {
    return (
      <button onClick={onClick} className={className}>
        <img src={label} alt="search" />
      </button>
    );
  }
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
};
