import { FunctionComponent, useState } from 'react';

import { Button } from 'sharedComponents/Button';
import { SORTING_IMGS } from 'constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { productListSelector } from 'store/selectors/product';
import { IProduct } from 'utils/interfaces/product';
import { setProductList } from 'store/slices/product';

export const Sort: FunctionComponent = () => {
  const products = useSelector(productListSelector);
  const [isDown, setIsDown] = useState(true);
  const dispatch = useDispatch();

  const sortBy = (type: keyof IProduct) => {
    const sortedProducts = [...products];

    const sortUp = (sortedProducts: IProduct[]) => {
      sortedProducts.sort((prev: IProduct, next: IProduct) => (prev[type] > next[type] ? -1 : 1));
    };

    const sortDown = (sortedProducts: IProduct[]) => {
      sortedProducts.sort((prev: IProduct, next: IProduct) => (prev[type] < next[type] ? -1 : 1));
    };

    if (isDown) {
      sortDown(sortedProducts);
    } else {
      sortUp(sortedProducts);
    }
    dispatch(setProductList(sortedProducts));
    setIsDown(!isDown);
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
