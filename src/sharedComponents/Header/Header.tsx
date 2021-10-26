import { FunctionComponent } from "react";
import { NavBar } from "sharedComponents/NavBar/NavBar";
import { useStyle } from "./styles";

export const Header: FunctionComponent = () => {
  const classes = useStyle();
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <a href="#" className={classes.logoLink}>
            <img src="../../assets/icons/logo.svg" alt="logo" />
          </a>
        </div>

        <NavBar />
      </div>

      {/* //     <app-search></app-search>

    //     <div className="localize-buttons">
    //         <button (click)="switchLang(Language.en)">{{ Language.en }}</button>
    //         <button (click)="switchLang(Language.ru)">{{ Language.ru }}</button>
    //     </div>

    //     <div>
    //         <a [routerLink]="Route.login">
    //             <img src="assets/icons/login.svg" alt="login" />
    //         </a>
    //         <a [routerLink]="Route.cart">
    //             <img src="assets/icons/shopping-cart.svg" alt="cart" />
    //         </a>
    //     </div>
    // </div> */}
    </header>
  );
};
