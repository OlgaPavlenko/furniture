import { FunctionComponent } from 'react';

import { Footer } from 'sharedComponents/Footer';
import { Header } from 'sharedComponents/Header';
import { Main } from 'pages/Main';
import { useStyle } from './styles';

export const Layout: FunctionComponent = () => {
  const classes = useStyle();

  return (
    <div className={classes.layout}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
