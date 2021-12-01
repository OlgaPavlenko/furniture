import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'sharedComponents/Button';
import { productCartSelector } from 'store/selectors/cart';
import { deleteAllProducts } from 'store/slices/cart';
import { IProduct } from 'store/utils/interfaces/product';
import { ProductCartView } from './ProductCartView';
import { useStyle } from './styles';

export const ProductCartList: FunctionComponent = () => {
  const products = useSelector(productCartSelector);
  const dispatch = useDispatch();
  const classes = useStyle();

  const removeAllProducts = () => {
    dispatch(deleteAllProducts());
  };

  return (
    <div className={classes.productCartList}>
      {products.map((product: IProduct) => (
        <ProductCartView key={product.id} product={product} />
      ))}
      <Button
        name="Remove All Products"
        className={classes.removeAllProducts}
        onClick={removeAllProducts}
      />
    </div>
  );
};
