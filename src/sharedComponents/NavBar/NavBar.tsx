import { FunctionComponent } from 'react';
import { useStyle } from './styles';
import { NavBarLink } from './NavBarLink';
import { NAV_BAR_LINK } from 'constants/constants';

export const NavBar: FunctionComponent = () => {
  const classes = useStyle();
  return (
    <div>
      <ul className={classes.navigation}>
        {NAV_BAR_LINK.map((option) => {
          return <NavBarLink key={option} option={option} />;
        })}
      </ul>
    </div>
  );
};
