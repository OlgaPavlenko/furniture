import { FunctionComponent } from 'react';
import { useStyle } from './styles';
import { NavBarLink } from './NavBarLink/NavBarLink';
import { navBarLink } from 'enums/enums';

export const NavBar: FunctionComponent = () => {
  const classes = useStyle();
  return (
    <div>
      <ul className={classes.navigation}>
        {Object.values(navBarLink).map((option) => {
          return <NavBarLink key={option} option={option} />;
        })}
      </ul>
    </div>
  );
};
