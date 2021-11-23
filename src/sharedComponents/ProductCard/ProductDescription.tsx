import { FunctionComponent } from 'react';

import { Button } from 'sharedComponents/Button';
import { useStyle } from './styles';

interface IProductMainImg {
  name: string;
  description: string;
  price: number;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ProductDescription: FunctionComponent<IProductMainImg> = ({
  name,
  description,
  price,
  onClick,
}) => {
  const classes = useStyle();
  const cart = require('assets/icons/shopping-cart.svg').default;

  return (
    <div className={classes.productCardBlock}>
      <div className={classes.productCardInfo}>
        <p className={classes.productCardName}>{name}</p>
        <p className={classes.productCardDescripion}>{description}</p>
        <span className={classes.productCardPrice}>{price}</span>
      </div>
      <Button badgeSrc={cart} className={classes.productCardCartButton} onClick={onClick} />
    </div>
  );
};
