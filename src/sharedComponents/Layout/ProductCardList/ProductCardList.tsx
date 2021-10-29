import { FunctionComponent, useEffect } from 'react';
import { useStyle } from './styles';

import { ProductCard } from 'sharedComponents/ProductCard';
import { getProductsAsync } from 'store/slices/product-slice';

export const ProductCardList: FunctionComponent = () => {
  const classes = useStyle();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsAsync());
  }, []);

  return (
    <div className={classes.main}>
      <div className={classes.catalog}>
        <ProductCard />
      </div>
    </div>
  );
};
