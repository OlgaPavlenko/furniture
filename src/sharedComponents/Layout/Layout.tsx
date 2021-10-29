import { FunctionComponent } from 'react';
import { useStyle } from './styles';

import { Footer } from 'sharedComponents/Footer';
import { Header } from 'sharedComponents/Header';
import { ProductCard } from 'sharedComponents/ProductCard';

export const Layout: FunctionComponent = () => {
  const classes = useStyle();
  return (
    <div className={classes.layout}>
      <Header />
      <ProductCard />
      <Footer />
    </div>
  );
};
