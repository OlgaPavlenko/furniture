import { userMenuItems } from 'constants/constants';
import { FunctionComponent } from 'react';
import { useStyle } from './styles';

import { Button } from 'sharedComponents/Button/Button';
import { NavBar } from 'sharedComponents/NavBar/NavBar';
import { Search } from 'sharedComponents/Search/Search';
import { UserMenuItem } from 'sharedComponents/UserMenuItem/UserMenuItem';
import { language } from 'enums/enums';

export const Header: FunctionComponent = () => {
  const logo = require('assets/icons/logo.svg').default as string;

  const classes = useStyle();

  interface IUserMenuItem {
    name: string;
    src: string;
  }

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

        <div className={classes.localize}>
          {Object.values(language).map((language) => {
            return <Button key={language} language={language} />;
          })}
        </div>

        <div>
          {Object.values(userMenuItems).map((item: IUserMenuItem) => {
            console.log(item);
            return <UserMenuItem key={item.name} src={item.src} />;
          })}
        </div>
      </div>
    </header>
  );
};
