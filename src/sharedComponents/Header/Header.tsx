import { FunctionComponent } from 'react';
import { useStyle } from './styles';

import { NavBar } from 'sharedComponents/NavBar';
import { Search } from 'sharedComponents/Search';
import { Buttons } from 'sharedComponents/Buttons';
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
        <Buttons />
        <UserMenuItems />
      </div>
    </header>
  );
};
