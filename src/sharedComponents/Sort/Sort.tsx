import { FunctionComponent, useState } from 'react';

import { useStyle } from './styles';
import { Button } from 'sharedComponents/Button';
import { SORTING_IMGS } from 'constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { productListSelector } from 'store/selectors/product';
import { IProduct } from 'utils/interfaces/product';
import { setProductList } from 'store/slices/product';

export const Sort: FunctionComponent = () => {
  const classes = useStyle();

  const products = useSelector(productListSelector);
  const [ascName, setAscName] = useState(1);
  const [ascPrice, setAscPrice] = useState(1);
  const dispatch = useDispatch();

  const sort = (type: keyof IProduct) => {
    const sortedProducts = [...products];

    const sortOrder = ascName < 0 || ascPrice < 0 ? -1 : 1;
    const resultProducts = sortedProducts.sort((prev: IProduct, next: IProduct) =>
      prev[type] > next[type] ? -sortOrder : sortOrder,
    );

    if (type === 'price') {
      setAscPrice(-ascPrice);
    } else {
      setAscName(-ascName);
    }

    dispatch(setProductList(resultProducts));
  };

  return (
    <div className="">
      <Button
        name="Price"
        badgeSrc={ascPrice === 1 ? SORTING_IMGS.up : SORTING_IMGS.down}
        className={classes.priceButton}
        onClick={() => {
          sort('price');
        }}
      />
      <Button
        name="Name"
        badgeSrc={ascName === 1 ? SORTING_IMGS.up : SORTING_IMGS.down}
        className="buttons"
        onClick={() => {
          sort('name');
        }}
      />
    </div>
  );
};
