import { FunctionComponent } from 'react';

import { Button } from 'sharedComponents/Button';
import { useStyle } from './styles';

interface IProductMainImg {
  name: string;
  description: string;
  price: number;
}

export const ProductDescription: FunctionComponent<IProductMainImg> = ({
  name,
  description,
  price,
}) => {
  const classes = useStyle();
  const cart = require('assets/icons/shopping-cart.svg').default;

  return (
    <div className={classes.productCardBlock}>
      <div className={classes.productCardInfo}>
        <p className={classes.productCardName}>{name}</p>
        <p className={classes.productCardDescripion}>{description}</p>
        <span className={classes.productCardPrice}>{price} uah</span>
      </div>
      <Button badgeSrc={cart} className={classes.productCardCartButton} />
    </div>
  );
};
