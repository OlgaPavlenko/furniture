import { FunctionComponent } from 'react';
import { NAV_BAR_LINK } from 'constants/constants';
import { useTranslation } from 'react-i18next';
import { useStyle } from './styles';
import { NavBarLink } from './NavBarLink';

export const NavBar: FunctionComponent = () => {
  const { t } = useTranslation(['AppBar']);
  const classes = useStyle();
  return (
    <div>
      <ul className={classes.navigation}>
        {NAV_BAR_LINK.map(({ name, path }) => {
          return <NavBarLink key={name} option={t(name)} to={path} />;
        })}
      </ul>
    </div>
  );
};
