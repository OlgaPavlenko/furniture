import { FunctionComponent, useState } from 'react';
import { useStyle } from './styles';

import { Footer } from 'sharedComponents/Footer';
import { Header } from 'sharedComponents/Header';
import { Filter } from 'sharedComponents/Filter';
import { ProductCardList } from 'pages/ProductCardList';
import { Button } from 'sharedComponents/Button';
import { TOGGLE_BUTTONS_IMG } from 'constants/constants';

export const Layout: FunctionComponent = () => {
  const classes = useStyle();
  const [isListVeiw, setListVeiw] = useState(false);

  const catalogViewToggle = () => {
    setListVeiw(!isListVeiw);
  };

  return (
    <div className={classes.layout}>
      <Header />
      <div className={classes.main}>
        <Filter />
        <ProductCardList isListVeiw={isListVeiw} />
        <Button
          badgeSrc={isListVeiw ? TOGGLE_BUTTONS_IMG.menu : TOGGLE_BUTTONS_IMG.list}
          onClick={catalogViewToggle}
          className={classes.viewToggler}
        />
      </div>
      <Footer />
    </div>
  );
};
