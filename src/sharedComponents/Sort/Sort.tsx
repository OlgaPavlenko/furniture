import { FunctionComponent, useState } from 'react';

import { useStyle } from './styles';
import { Button } from 'sharedComponents/Button';
import { SORTING_IMGS } from 'constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { productListSelector } from 'store/selectors/product';
import { IProduct } from 'utils/interfaces/product';
import { setProductList } from 'store/slices/product';

type Order = 'asc' | 'desc';

export const Sort: FunctionComponent = () => {
  const classes = useStyle();

  const products = useSelector(productListSelector);
  const [ascName, setAscName] = useState<Order>('asc');
  const [ascPrice, setAscPrice] = useState<Order>('asc');
  const dispatch = useDispatch();

  const reverOrder = (order: Order) => (order === 'asc' ? 'desc' : 'asc');

  const sortBy = (type: keyof IProduct) => {
    const sortedProducts = [...products];

    const sort = (order: Order) => {
      const sortOrder = order === 'asc' ? 1 : -1;
      sortedProducts.sort((prev: IProduct, next: IProduct) =>
        prev[type] > next[type] ? -sortOrder : sortOrder,
      );
    };

    if (type === 'price') {
      sort(ascPrice);
      setAscPrice(reverOrder(ascPrice));
    } else {
      sort(ascName);
      setAscName(reverOrder(ascName));
    }

    dispatch(setProductList(sortedProducts));
  };

  return (
    <div className="">
      <Button
        name="Price"
        badgeSrc={ascPrice === 'asc' ? SORTING_IMGS.up : SORTING_IMGS.down}
        className={classes.priceButton}
        onClick={() => {
          sortBy('price');
        }}
      />
      <Button
        name="Name"
        badgeSrc={ascName === 'asc' ? SORTING_IMGS.up : SORTING_IMGS.down}
        className="buttons"
        onClick={() => {
          sortBy('name');
        }}
      />
    </div>
  );
};
