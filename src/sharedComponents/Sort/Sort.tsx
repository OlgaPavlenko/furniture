import { FunctionComponent, useState } from 'react';

import { Button } from 'sharedComponents/Button';
import { SORTING_IMGS } from 'constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { productListSelector } from 'store/selectors/product';
import { IProduct } from 'utils/interfaces/product';
import { setProductList } from 'store/slices/product';
import { useStyle } from './styles';

export const Sort: FunctionComponent = () => {
  const classes = useStyle();

  const products = useSelector(productListSelector);
  const [order, setOrder] = useState<{ [key: string]: number }>({ name: 1, price: 1 });
  const dispatch = useDispatch();

  const sort = (type: keyof IProduct) => {
    const sortedProducts = [...products];

    const resultProducts = sortedProducts.sort((prev: IProduct, next: IProduct) =>
      prev[type] > next[type] ? -order[type] : order[type],
    );
    setOrder({ ...order, [type]: -order[type] });

    dispatch(setProductList(resultProducts));
  };

  return (
    <div className="">
      <Button
        name="Price"
        badgeSrc={order.price === 1 ? SORTING_IMGS.up : SORTING_IMGS.down}
        className={classes.priceButton}
        onClick={() => {
          sort('price');
        }}
      />
      <Button
        name="Name"
        badgeSrc={order.name === 1 ? SORTING_IMGS.up : SORTING_IMGS.down}
        className="buttons"
        onClick={() => {
          sort('name');
        }}
      />
    </div>
  );
};
