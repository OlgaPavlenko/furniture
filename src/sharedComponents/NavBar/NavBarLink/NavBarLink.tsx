import { FunctionComponent } from 'react';
import { useStyle } from './styles';

import { ListLink } from 'sharedComponents/ListLink';

interface INavBarLink {
  option: string;
}

export const NavBarLink: FunctionComponent<INavBarLink> = ({ option }) => {
  const classes = useStyle();

  return (
    <ListLink
      className={classes.navigationItem}
      linkClassName={classes.navigationItemLink}
      text={option}
    />
  );
};
