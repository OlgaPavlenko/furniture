import { FunctionComponent } from 'react';
import { useStyle } from './styles';

interface INavBarLink {
  option: string;
}

export const NavBarLink: FunctionComponent<INavBarLink> = ({ option }) => {
  const classes = useStyle();

  return (
    <li className={classes.navigationItem}>
      <a href="#" className={classes.navigationItemLink}>
        {option}
      </a>
    </li>
  );
};
