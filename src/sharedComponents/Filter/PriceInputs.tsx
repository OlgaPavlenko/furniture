import { FunctionComponent } from 'react';
import { Input } from 'sharedComponents/Input';
import { useStyle } from './style';

interface IPriceInputs {
  minPrice: number;
  maxPrice: number;
}

export const PriceInputs: FunctionComponent<IPriceInputs> = ({ minPrice, maxPrice }) => {
  const classes = useStyle();

  return (
    <div className={classes.price}>
      <Input value={minPrice} className={classes.priceInput} onChange={() => {}} />
      <Input value={maxPrice} className={classes.priceInput} onChange={() => {}} />
    </div>
  );
};
