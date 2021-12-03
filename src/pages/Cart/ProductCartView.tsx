import { FunctionComponent, useEffect } from 'react';
import { ProductDescription } from 'sharedComponents/ProductCard/ProductDescription';
import { ProductMainImg } from 'sharedComponents/ProductCard/ProductMainImg';
import { Button } from 'sharedComponents/Button';
import { deleteProduct } from 'store/slices/cart';
import { useDispatch, useSelector } from 'react-redux';
import { productCartSelector } from 'store/selectors/cart';
import { IProductWithQuantity } from 'store/utils/interfaces/product';
import { QuantitySelect } from './QuantitySelect';
import { useStyle } from './styles';

interface IProductCartView {
  product: IProductWithQuantity;
}

export const ProductCartView: FunctionComponent<IProductCartView> = ({ product }) => {
  const classes = useStyle();
  const bin = require('assets/icons/bin.svg').default as string;
  const dispatch = useDispatch();
  const quantity = useSelector(productCartSelector);

  const deleteCurrentProduct = (id: string) => {
    dispatch(deleteProduct(id));
  };

  const getPrice = (): number => {
    return product.quantity * product.product.price;
  };

  useEffect(() => {
    getPrice();
  }, [quantity]);

  return (
    <div className={classes.wraper}>
      <div className={classes.selectBox}>
        <div className={classes.leftBar}>
          <QuantitySelect className={classes.select} productId={product.product.id} />
          <Button badgeSrc={bin} onClick={() => deleteCurrentProduct(product.product.id)} />
        </div>
      </div>
      <div className={classes.product}>
        <ProductMainImg src={product.product.images.baseUrl} className={classes.image} />
        <div className={classes.productView}>
          <h1 className={classes.productName}>{product.product.name}</h1>
          <ProductDescription
            name={product.product.name}
            description={product.product.description}
            price={getPrice()}
            className={classes.description}
          />
        </div>
      </div>
    </div>
  );
};
