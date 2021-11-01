import { FunctionComponent } from 'react';
import { useStyle } from './styles';
<<<<<<< HEAD

import { ListLink } from 'sharedComponents/ListLink';
=======
>>>>>>> a2bac77b3d88b153998e591c18e8fb8a6f9a7e67

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
