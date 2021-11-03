import { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useStyle } from './styles';

import { ProductCard } from 'sharedComponents/ProductCard';
import { getProductsAsync } from 'store/slices/product';
import { productListSelector } from 'store/selectors/product';
import { IProduct } from 'utils/interfaces/product';
import { querySelector, searchListSelector } from 'store/selectors/search';

interface IProductCardList {
  isListVeiw: boolean;
}

export const ProductCardList: FunctionComponent<IProductCardList> = ({ isListVeiw }) => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const searchQuery = useSelector(querySelector);
  const productList: IProduct[] = useSelector(productListSelector);
  const productsWithQuery: IProduct[] = useSelector(searchListSelector);

  useEffect(() => {
    dispatch(getProductsAsync());
  }, []);

  const renderList = searchQuery ? productsWithQuery : productList;

  return (
    <div className={classes.main}>
      <ul className={isListVeiw ? classes.catalogBlock : classes.catalog}>
        {renderList.map((product: IProduct) => (
          <ProductCard
            key={product.id}
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
