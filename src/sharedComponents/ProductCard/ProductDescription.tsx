import { FunctionComponent } from 'react';

import { Button } from 'sharedComponents/Button';
import { useStyle } from './styles';

interface IProductDescription {
  name: string;
  description: string;
  price: number;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className: string;
}

export const ProductDescription: FunctionComponent<IProductDescription> = ({
  name,
  description,
  price,
  onClick,
  className,
}) => {
  const classes = useStyle();
  const cart = require('assets/icons/shopping-cart.svg').default;

  return (
    <div className={classes.productCardBlock}>
      <div className={classes.productCardInfo}>
        <p className={classes.productCardName}>{name}</p>
        <p className={className}>{description}</p>
        <span className={classes.productCardPrice}>{price}грн</span>
      </div>
      <Button badgeSrc={cart} className={classes.productCardCartButton} onClick={onClick} />
    </div>
  );
};
