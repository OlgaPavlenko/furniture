import { ButtonHTMLAttributes, DOMAttributes, FunctionComponent } from 'react';

interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    DOMAttributes<HTMLButtonElement> {
  name?: string;
  badgeSrc?: string;
  className?: string;
  disabled?: boolean;
  alt?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button: FunctionComponent<IButtonProps> = ({
  name,
  badgeSrc,
  className,
  disabled,
  alt,
  onClick,
}) => {
  return (
    <button disabled={disabled} onClick={onClick} className={className} name={name}>
      {!!badgeSrc && <img src={badgeSrc} alt={alt} />}
      {!!name && <p>{name}</p>}
    </button>
  );
};
