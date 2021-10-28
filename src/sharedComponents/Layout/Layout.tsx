import { FunctionComponent } from "react";
import { useStyle } from "./styles";

import { Footer } from "sharedComponents/Footer";
import { Header } from "sharedComponents/Header/Header";

export const Layout: FunctionComponent = () => {
  const classes = useStyle();
  return (
    <div className={classes.layout}>
      <Header />
      <Footer />
    </div>
  );
};
