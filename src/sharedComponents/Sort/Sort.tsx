import { FunctionComponent, useState } from 'react';

import { Button } from 'sharedComponents/Button';
import { SORTING_IMGS, SORT_OPTIONS } from 'constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { productListSelector } from 'store/selectors/product';
import { setProductList } from 'store/slices/product';
import { IProduct } from 'utils/interfaces/product';
import { useTranslation } from 'react-i18next';
import { useStyle } from './styles';

export const Sort: FunctionComponent = () => {
  const classes = useStyle();
  const { t } = useTranslation(['Sort']);

  const products = useSelector(productListSelector);
  const [order, setOrder] = useState<{ [key: string]: number }>({ name: 1, price: 1 });
  const dispatch = useDispatch();

  const sort = (type: keyof IProduct) => {
    const tempProducts = [...products];
    const resultProducts = tempProducts.sort((prev: IProduct, next: IProduct) =>
      prev[type] > next[type] ? -order[type] : order[type],
    );

    setOrder({ ...order, [type]: -order[type] });

    dispatch(setProductList(resultProducts));
  };

  return (
    <div className="">
      <Button
        name={t(SORT_OPTIONS.price)}
        badgeSrc={order.price === 1 ? SORTING_IMGS.up : SORTING_IMGS.down}
        className={classes.priceButton}
        onClick={() => {
          sort(SORT_OPTIONS.price as keyof IProduct);
        }}
      />
      <Button
        name={t(SORT_OPTIONS.name)}
        badgeSrc={order.name === 1 ? SORTING_IMGS.up : SORTING_IMGS.down}
        className={classes.priceButton}
        onClick={() => {
          sort(SORT_OPTIONS.name as keyof IProduct);
        }}
      />
    </div>
  );
};
