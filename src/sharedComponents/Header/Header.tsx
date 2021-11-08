import { FunctionComponent } from 'react';
import { useStyle } from './styles';

import { NavBar } from 'sharedComponents/NavBar';
import { Search } from 'sharedComponents/Search';
import { Sort } from 'sharedComponents/Sort';
import { LanguageButtons } from 'sharedComponents/LanguageButtons';
import { UserMenuItems } from 'sharedComponents/UserMenuItems';

export const Header: FunctionComponent = () => {
  const logo = require('assets/icons/logo.svg').default as string;

  const classes = useStyle();

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <a href="#" className={classes.logoLink}>
            <img src={logo} alt="logo" />
          </a>
        </div>

        <NavBar />
        <Search />
        <Sort />
        <LanguageButtons />
        <UserMenuItems />
      </div>
    </header>
  );
};
