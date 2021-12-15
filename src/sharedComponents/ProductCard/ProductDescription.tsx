import { FunctionComponent } from 'react';
import { useStyle } from './styles';

interface IProductDescription {
  name: string;
  description: string;
  price: number | undefined;
  className?: string;
}

export const ProductDescription: FunctionComponent<IProductDescription> = ({
  name,
  description,
  price,
  className,
}) => {
  const classes = useStyle();

  return (
    <div className={classes.productCardBlock}>
      <div className={classes.productCardInfo}>
        <p className={classes.productCardName}>{name}</p>
        <p className={className}>{description}</p>
        <span className={classes.productCardPrice}>{price} грн</span>
      </div>
    </div>
  );
};
