import { ChangeEvent, FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { Input } from 'sharedComponents/Input';
import { searchMaxPriceValue, searchMinPriceValue } from 'store/slices/filter';
import { useStyle } from './style';

interface IPriceInputs {
  minPrice: number;
  maxPrice: number;
}

export const PriceInputs: FunctionComponent<IPriceInputs> = ({ minPrice, maxPrice }) => {
  const classes = useStyle();
  const dispatch = useDispatch();

  const getMinPrice = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(searchMinPriceValue(event.target.value));
  };

  const getMaxPrice = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(searchMaxPriceValue(event.target.value));
  };

  return (
    <div className={classes.price}>
      <Input value={minPrice} className={classes.priceInput} onChange={getMinPrice} />
      <Input value={maxPrice} className={classes.priceInput} onChange={getMaxPrice} />
    </div>
  );
};
