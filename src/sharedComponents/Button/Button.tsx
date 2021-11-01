import { ButtonHTMLAttributes, DOMAttributes, FunctionComponent } from 'react';

interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    DOMAttributes<HTMLButtonElement> {
  text?: string;
  badgeSrc?: string;
  className?: string;
  alt?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button: FunctionComponent<IButtonProps> = ({
  text,
  badgeSrc,
  className,
  alt,
  onClick,
}) => {
  return (
    <button onClick={onClick} className={className}>
      {badgeSrc ? <img src={badgeSrc} alt={alt} /> : text}
    </button>
  );
};
