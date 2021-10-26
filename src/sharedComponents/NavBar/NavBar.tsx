import { FunctionComponent } from "react";
import { useStyle } from "./styles";

export const NavBar: FunctionComponent = () => {
  const classes = useStyle();
  return (
    <div>
      <ul className={classes.navigation}>
        <li className={classes.navigationItem}>
          <a className={classes.navigationItemLink}>Catalog</a>
        </li>
        <li className={classes.navigationItem}>
          <a className={classes.navigationItemLink}>Delivery</a>
        </li>
        <li className={classes.navigationItem}>
          <a className={classes.navigationItemLink}>About Us</a>
        </li>
      </ul>
    </div>
  );
};
