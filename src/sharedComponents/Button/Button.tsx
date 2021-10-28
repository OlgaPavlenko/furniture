import { ButtonHTMLAttributes, DOMAttributes, FunctionComponent } from 'react';
import { useStyle } from './style';

interface INavBarButton {
  language?: string;
  badge?: string;
  classnames?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    DOMAttributes<HTMLButtonElement>,
    INavBarButton {
  language?: string;
  badge?: string;
  classnames?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button: FunctionComponent<ButtonProps> = ({
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
    <button>
      <img src={badge} alt="search" />
    </button>
  );
};
