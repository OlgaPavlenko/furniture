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
}

export const Button: FunctionComponent<ButtonProps> = ({ language, badge }) => {
  const classes = useStyle();
  if (language) {
    return <button className={language ? classes.localizeButtons : undefined}>{language}</button>;
  }
  return (
    <button>
      <img src={badge} alt="search" />
    </button>
  );
};
