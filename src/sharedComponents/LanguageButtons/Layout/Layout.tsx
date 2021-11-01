import { FunctionComponent } from 'react';
import { useStyle } from './styles';

import { Footer } from 'sharedComponents/Footer';
import { Header } from 'sharedComponents/Header';
<<<<<<< HEAD:src/sharedComponents/Layout/Layout.tsx
import { Filter } from 'sharedComponents/Filter';
import { ProductCardList } from './ProductCardList';
=======
import { ProductCardList } from 'pages/ProductCardList';
>>>>>>> a2a09a2ed92e7a55903fe5f8bf82c4f8f3a1e7f0:src/sharedComponents/LanguageButtons/Layout/Layout.tsx

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
