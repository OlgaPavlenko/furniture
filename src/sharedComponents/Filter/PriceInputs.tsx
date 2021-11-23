import { ChangeEvent, FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { Input } from 'sharedComponents/Input';
import { setMinPrice, setMaxPrice, getProductsListWithQuery } from 'store/slices/filter';
import { useStyle } from './style';

interface IPriceInputs {
  minPrice: number;
  maxPrice: number;
}

export const PriceInputs: FunctionComponent<IPriceInputs> = ({ minPrice, maxPrice }) => {
  const classes = useStyle();
  const dispatch = useDispatch();

  const getMinPrice = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setMinPrice(event.target.value));
    dispatch(getProductsListWithQuery());
  };

  const getMaxPrice = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setMaxPrice(event.target.value));
    dispatch(getProductsListWithQuery());
  };

  return (
    <div className={classes.price}>
      <Input value={minPrice} className={classes.priceInput} onChange={getMinPrice} />
      <Input value={maxPrice} className={classes.priceInput} onChange={getMaxPrice} />
    </div>
  );
};
