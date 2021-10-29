import { ButtonHTMLAttributes, DOMAttributes, FunctionComponent } from 'react';
import { useStyle } from './style';

interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    DOMAttributes<HTMLButtonElement> {
  language?: string;
  badge?: string;
  classnames?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button: FunctionComponent<IButtonProps> = ({
  language,
  badge,
  classnames,
  onClick,
}) => {
  const classes = useStyle();
  if (language) {
    return (
      <button onClick={onClick} className={classes.localizeButtons}>
        {language}
      </button>
    );
  }
  return (
    <button className={classnames}>
      <img src={badge} alt="search" />
    </button>
  );
};
