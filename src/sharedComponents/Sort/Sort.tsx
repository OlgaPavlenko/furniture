import { FunctionComponent, useState } from 'react';

import { Button } from 'sharedComponents/Button';
import { SORTING_IMGS } from 'constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { productListSelector } from 'store/selectors/product';
import { setProductList } from 'store/slices/product';
import { IProduct } from 'utils/interfaces/product';

export const Sort: FunctionComponent = () => {
  const products = useSelector(productListSelector);
  const [isDown, setIsUp] = useState(true);
  const dispatch = useDispatch();

  const sortBy = (type: string) => {
    const sortedProducts = [...products];

    if (type) {
      if (type && isDown) {
        sortedProducts.sort((prev, next) =>
          prev[type as keyof IProduct] < next[type as keyof IProduct] ? -1 : 1,
        );
        setIsUp(!isDown);
        dispatch(setProductList(sortedProducts));
      } else {
        sortedProducts.sort((prev, next) =>
          prev[type as keyof IProduct] > next[type as keyof IProduct] ? -1 : 1,
        );
        setIsUp(!isDown);
        dispatch(setProductList(sortedProducts));
      }
    }
  };

  return (
    <div className="">
      {Object.entries(SORTING_IMGS).map((image) => {
        return (
          <Button
            key={image[0]}
            badgeSrc={image[1]}
            onClick={() => {
              image[0] === 'number' ? sortBy('price') : sortBy('name');
            }}
          />
        );
      })}
    </div>
  );
};
