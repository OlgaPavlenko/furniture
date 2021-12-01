import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'sharedComponents/Button';
import { productCartSelector } from 'store/selectors/cart';
import { IProduct } from 'store/utils/interfaces/product';
import { ProductCartView } from './ProductCartView';
import { QuantitySelect } from './QuantitySelect';
import { useStyle } from './styles';

export const ProductCartList: FunctionComponent = () => {
  const bin = require('assets/icons/bin.svg').default as string;
  const products = useSelector(productCartSelector);
  const classes = useStyle();

  return (
    <div className={classes.productCartList}>
      {products.map((product: IProduct) => (
        <>
          <div className={classes.selectBox}>
            <div className={classes.leftBar}>
              <QuantitySelect className={classes.select} />
              <Button badgeSrc={bin} />
            </div>
          </div>
          <ProductCartView product={product} />
        </>
      ))}
      <Button name="Remove All Products" className={classes.removeAllProducts} />
    </div>
  );
};
