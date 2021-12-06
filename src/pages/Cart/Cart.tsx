import { FunctionComponent } from 'react';
import { CART_IMG, CART_SVG } from 'constants/constants';
import { Button } from 'sharedComponents/Button';
import { useDispatch, useSelector } from 'react-redux';
import { productCartSelector, totalPriceSelector } from 'store/selectors/cart';
import { deleteAllProducts } from 'store/slices/cart';
import { toast } from 'react-toastify';
import { CartInfo } from './CartInfo';
import { ProductCartList } from './ProductCartList';
import { EmptyCart } from './EmptyCart';
import { useStyle } from './styles';
import 'react-toastify/dist/ReactToastify.css';

export const Cart: FunctionComponent = () => {
  toast.configure();
  const products = useSelector(productCartSelector);
  const totalPrice = useSelector(totalPriceSelector);
  const dispatch = useDispatch();
  const classes = useStyle();

  const buyProduct = (): void => {
    toast(`You just bought an item worth ${totalPrice} uah`, {
      position: toast.POSITION.TOP_CENTER,
    });
    setTimeout(() => {
      dispatch(deleteAllProducts());
    }, 4000);
  };

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
          <Button name="BUY" className={classes.buyButton} onClick={buyProduct} />
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
