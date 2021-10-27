import { FunctionComponent } from 'react';
import { useStyle } from './style';

interface INavBarButton {
  language?: string;
  badge?: string;
}

export const Button: FunctionComponent<INavBarButton> = ({ language, badge }) => {
  const classes = useStyle();
  if (language) {
    return <button className={classes.localizeButtons}>{language}</button>;
  }
  return (
    <button>
      <img src={badge} alt="search" />
    </button>
  );
};
