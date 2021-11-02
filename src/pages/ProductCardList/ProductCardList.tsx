import { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useStyle } from './styles';

import { ProductCard } from 'sharedComponents/ProductCard';
import { getProductsAsync } from 'store/slices/product';
import { productListSelector } from 'store/selectors/product';
import { IProduct } from 'utils/interfaces/product';
import { Button } from 'sharedComponents/Button';
import { TOGGLE_BUTTONS_IMG } from 'constants/constants';

export const ProductCardList: FunctionComponent = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const productList: IProduct[] = useSelector(productListSelector);
  const [listVeiw, setListVeiw] = useState(false);

  useEffect(() => {
    dispatch(getProductsAsync());
  }, []);

  const catalogViewToggle = () => {
    setListVeiw(!listVeiw);
  };

  return (
    <div className={classes.main}>
      <div className={classes.viewToggler}>
        <Button
          badgeSrc={listVeiw ? TOGGLE_BUTTONS_IMG.menu : TOGGLE_BUTTONS_IMG.list}
          onClick={catalogViewToggle}
        />
      </div>
      <ul className={listVeiw ? classes.catalogBlock : classes.catalog}>
        {productList.map((product: IProduct) => (
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
