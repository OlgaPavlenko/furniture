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
<<<<<<< HEAD
    <button className={classnames}>
      <img src={badge} alt="search" />
=======
    <button onClick={onClick} className={className}>
      {!!badgeSrc && <img src={badgeSrc} alt={alt} />}
      {!!text && <p>{text}</p>}
>>>>>>> a2bac77b3d88b153998e591c18e8fb8a6f9a7e67
    </button>
  );
};
