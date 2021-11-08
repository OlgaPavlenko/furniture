import { FunctionComponent, useState } from 'react';

import { Button } from 'sharedComponents/Button';
import { SORTING_IMGS } from 'constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { productListSelector } from 'store/selectors/product';
import { setProductList } from 'store/slices/product';

export const Sort: FunctionComponent = () => {
  const products = useSelector(productListSelector);
  const [isDown, setIsUp] = useState(true);
  const dispatch = useDispatch();

  const sortPrice = () => {
    isDown ? sortToUpPrice() : sortToDownPrice();
    setIsUp(!isDown);
  };

  const sortToUpPrice = () => {
    const productsToMaxPrice = [...products];
    productsToMaxPrice.sort((prev, next) => (prev.price > next.price ? 1 : -1));
    dispatch(setProductList(productsToMaxPrice));
  };

  const sortToDownPrice = () => {
    const productsToMinPrice = [...products];
    productsToMinPrice.sort((prev, next) => (prev.price > next.price ? -1 : 1));
    dispatch(setProductList(productsToMinPrice));
  };

  const sortAlphabet = () => {
    isDown ? sortFromA() : sortFromZ();
    setIsUp(!isDown);
  };

  const sortFromA = () => {
    const productsToMaxPrice = [...products];
    productsToMaxPrice.sort((prev, next) => (prev.name > next.name ? 1 : -1));
    dispatch(setProductList(productsToMaxPrice));
  };

  const sortFromZ = () => {
    const productsToMinPrice = [...products];
    productsToMinPrice.sort((prev, next) => (prev.name > next.name ? -1 : 1));
    dispatch(setProductList(productsToMinPrice));
  };

  return (
    <div className="">
      {Object.entries(SORTING_IMGS).map((image) => {
        return (
          <Button
            key={image[0]}
            badgeSrc={image[1]}
            onClick={image[0] === 'number' ? sortPrice : sortAlphabet}
          />
        );
      })}
    </div>
  );
};
