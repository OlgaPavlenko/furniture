import { FunctionComponent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Footer } from 'sharedComponents/Footer';
import { Header } from 'sharedComponents/Header';
import { Main } from 'pages/Main';
import { useStyle } from './styles';

export const Layout: FunctionComponent = () => {
  const classes = useStyle();

  return (
    <div className={classes.layout}>
      <Router>
        <Header />
        <Main />
      </Router>
      <Footer />
    </div>
  );
};
