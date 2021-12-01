import { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ProductCard } from 'sharedComponents/ProductCard';
import { getProductsAsync, setIsListVeiw } from 'store/slices/product';
import { isListVeiwSelector, productListSelector } from 'store/selectors/product';
import { IProduct } from 'store/utils/interfaces/product';
import { Filter } from 'sharedComponents/Filter';
import { TOGGLE_BUTTONS_IMG } from 'constants/constants';
import { Button } from 'sharedComponents/Button';
import { useStyle } from './styles';

interface IProductCardList {
  isListVeiw: boolean;
}

export const ProductCardList: FunctionComponent<IProductCardList> = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const productList: IProduct[] = useSelector(productListSelector);
  const isListVeiw = useSelector(isListVeiwSelector);

  const catalogViewToggle = () => {
    dispatch(setIsListVeiw());
  };

  useEffect(() => {
    dispatch(getProductsAsync());
  }, []);

  return (
    <div className={classes.wrap}>
      <Button
        badgeSrc={isListVeiw ? TOGGLE_BUTTONS_IMG.menu : TOGGLE_BUTTONS_IMG.list}
        onClick={catalogViewToggle}
        className={classes.viewToggler}
      />
      <div className={classes.main}>
        <div className={classes.content}>
          <Filter />
          <ul className={isListVeiw ? classes.catalogBlock : classes.catalog}>
            {productList.map((product: IProduct) => (
              <ProductCard
                key={product.id}
                productId={product.id}
                name={product.name}
                description={product.description}
                images={product.images}
                price={product.price}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
