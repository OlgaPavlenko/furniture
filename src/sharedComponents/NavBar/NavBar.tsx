import { FunctionComponent } from 'react';
import { useStyle } from './styles';
import { NavBarLink } from './NavBarLink';
import { navBarLink } from 'constants/constants';

export const NavBar: FunctionComponent = () => {
  const classes = useStyle();
  return (
    <div>
      <ul className={classes.navigation}>
        {navBarLink.map((option) => {
          return <NavBarLink key={option} option={option} />;
        })}
      </ul>
    </div>
  );
};
