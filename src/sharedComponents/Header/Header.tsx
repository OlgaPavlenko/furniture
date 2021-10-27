import { FunctionComponent } from "react";
import { NavBar } from "sharedComponents/NavBar/NavBar";
import { Search } from "sharedComponents/Search/Search";
import { useStyle } from "./styles";

export const Header: FunctionComponent = () => {
  const logo = require("assets/icons/logo.svg").default as string;
  const login = require("assets/icons/login.svg").default as string;
  const cart = require("assets/icons/shopping-cart.svg").default as string;
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

        <div className={classes.localize}>
          <button className={classes.localizeButtons}>en</button>
          <button className={classes.localizeButtons}>ru</button>
        </div>

        <div>
          <a href="#">
            <img src={login} />
          </a>
          <a href="#">
            <img src={cart} />
          </a>
        </div>
      </div>
    </header>
  );
};
