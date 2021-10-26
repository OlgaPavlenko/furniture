import { FunctionComponent } from "react";
import { Header } from "sharedComponents/Header/Header";
import { useStyle } from "./styles";

export const Layout: FunctionComponent = () => {
  const classes = useStyle();
  return (
    <div className={classes.layout}>
      <Header />
    </div>
  );
};
