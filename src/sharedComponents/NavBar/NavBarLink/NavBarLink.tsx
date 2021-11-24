import { FunctionComponent } from 'react';
import { useStyle } from './styles';

import { LinkForNavBar } from '../NavLink';

interface INavBarLink {
  option: string;
  to: string;
}

export const NavBarLink: FunctionComponent<INavBarLink> = ({ option, to }) => {
  const classes = useStyle();

  return (
    <LinkForNavBar
      className={classes.navigationItem}
      linkClassName={classes.navigationItemLink}
      text={option}
      to={to}
    />
  );
};
