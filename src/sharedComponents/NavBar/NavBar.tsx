import { FunctionComponent } from 'react';
import { NAV_BAR_LINK } from 'constants/constants';
import { useStyle } from './styles';
import { NavBarLink } from './NavBarLink';

export const NavBar: FunctionComponent = () => {
  const classes = useStyle();
  return (
    <div>
      <ul className={classes.navigation}>
        {NAV_BAR_LINK.map(({ name, path }) => {
          return <NavBarLink key={name} option={name} to={path} />;
        })}
      </ul>
    </div>
  );
};
