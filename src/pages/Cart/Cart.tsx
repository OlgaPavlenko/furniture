import { FunctionComponent } from 'react';
import { CART_IMG, CART_SVG } from 'constants/constants';
import { Button } from 'sharedComponents/Button';
import { useSelector } from 'react-redux';
import { productCartSelector, totalPriceSelector } from 'store/selectors/cart';
import { CartInfo } from './CartInfo';
import { ProductCartList } from './ProductCartList';
import { EmptyCart } from './EmptyCart';
import { useStyle } from './styles';

export const Cart: FunctionComponent = () => {
  const products = useSelector(productCartSelector);
  const totalPrice = useSelector(totalPriceSelector);
  const classes = useStyle();

  return (
    <div className={classes.cart}>
      <h1 className={classes.name}>Shopping cart</h1>
      {!products.length ? (
        <EmptyCart />
      ) : (
        <>
          <div className={classes.totalPrice}>
            <div>Total for this order</div>
            <div>{totalPrice}</div>
          </div>
          <Button name="BUY" className={classes.buyButton} />
          <ProductCartList />
        </>
      )}
      <div className={classes.info}>
        <CartInfo object={CART_IMG} />
        <CartInfo object={CART_SVG} />
      </div>
      <div className={classes.secure}>Secure purchases with SSL data</div>
    </div>
  );
};
