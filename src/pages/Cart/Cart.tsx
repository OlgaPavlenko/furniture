import { FunctionComponent } from 'react';
import { CART_IMG, CART_SVG } from 'constants/constants';
import { Button } from 'sharedComponents/Button';
import { ProductCartView } from './ProductCartView';
import { CartInfo } from './CartInfo';
import { QuantitySelect } from './QuantitySelect';
import { EmptyCart } from './EmptyCart';
import { useStyle } from './styles';

export const Cart: FunctionComponent = () => {
  const classes = useStyle();
  const bin = require('assets/icons/bin.svg').default as string;

  return (
    <div className={classes.cart}>
      <h1 className={classes.name}>Shopping cart</h1>
      <EmptyCart />
      <div className={classes.totalPrice}>
        <div>Total for this order</div>
        <div>price</div>
      </div>
      <Button name="BUY" className={classes.buyButton} />
      <div className={classes.productCartList}>
        <div className={classes.selectBox}>
          <div>
            <QuantitySelect className={classes.select} />
            <Button badgeSrc={bin} />
          </div>
          <ProductCartView />
        </div>
        <Button name="Remove All Products" className={classes.removeAllProducts} />
      </div>
      <div className={classes.info}>
        <CartInfo object={CART_IMG} />
        <CartInfo object={CART_SVG} />
      </div>
      <div className={classes.secure}>Secure purchases with SSL data</div>
    </div>
  );
};
