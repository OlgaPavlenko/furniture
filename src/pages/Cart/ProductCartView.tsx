import { FunctionComponent, useMemo } from 'react';
import { ProductDescription } from 'sharedComponents/ProductCard/ProductDescription';
import { ProductMainImg } from 'sharedComponents/ProductCard/ProductMainImg';
import { Button } from 'sharedComponents/Button';
import { deleteProduct } from 'store/slices/cart';
import { useDispatch } from 'react-redux';
import { IProductWithQuantity } from 'store/utils/interfaces/product';
import { QuantitySelect } from './QuantitySelect';
import { useStyle } from './styles';

interface IProductCartView {
  product: IProductWithQuantity;
}

export const ProductCartView: FunctionComponent<IProductCartView> = ({
  product: { product, quantity },
}) => {
  const classes = useStyle();
  const bin = require('assets/icons/bin.svg').default as string;
  const dispatch = useDispatch();

  const deleteCurrentProduct = (id: string, productVariant: string) => {
    dispatch(deleteProduct({ id, productVariant }));
  };

  const price = useMemo((): number => {
    return quantity * product.price;
  }, [quantity]);

  return (
    <div className={classes.wraper}>
      <div className={classes.selectBox}>
        <div className={classes.leftBar}>
          <QuantitySelect
            className={classes.select}
            productId={product.id}
            productVariant={product.productVariant}
            defaultQuantity={quantity}
          />
          <Button
            badgeSrc={bin}
            onClick={() => deleteCurrentProduct(product.id, product.productVariant)}
          />
        </div>
      </div>
      <div className={classes.product}>
        <ProductMainImg src={product.productVariant} className={classes.image} />
        <div className={classes.productView}>
          <h1 className={classes.productName}>{product.name}</h1>
          <ProductDescription
            name={product.name}
            description={product.description}
            price={price}
            className={classes.description}
          />
        </div>
      </div>
    </div>
  );
};
