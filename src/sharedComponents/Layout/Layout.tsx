import { FunctionComponent } from 'react';
import { useStyle } from './styles';

import { Footer } from 'sharedComponents/Footer';
import { Header } from 'sharedComponents/Header';
import { Filter } from 'sharedComponents/Filter';
import { ProductCardList } from './ProductCardList';

export const Layout: FunctionComponent = () => {
  const classes = useStyle();
  return (
    <div className={classes.layout}>
      <Header />
      <div className={classes.main}>
        <Filter />
        <ProductCardList />
      </div>
      <Footer />
    </div>
  );
};
