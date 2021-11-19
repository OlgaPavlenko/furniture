import { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useStyle } from './styles';
import { ProductCard } from 'sharedComponents/ProductCard';
import { getProductsAsync } from 'store/slices/product';
import { isListVeiwSelector, productListSelector } from 'store/selectors/product';
import { IProduct } from 'utils/interfaces/product';

interface IProductCardList {
  isListVeiw: boolean;
}

export const ProductCardList: FunctionComponent<IProductCardList> = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const productList: IProduct[] = useSelector(productListSelector);
  const isListVeiw = useSelector(isListVeiwSelector);

  useEffect(() => {
    dispatch(getProductsAsync());
  }, []);

  console.log(isListVeiw);

  return (
    <div className={classes.main}>
      <ul className={isListVeiw ? classes.catalogBlock : classes.catalog}>
        {productList.map((product: IProduct) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            images={product.images}
            price={product.price}
          />
        ))}
      </ul>
    </div>
  );
};
