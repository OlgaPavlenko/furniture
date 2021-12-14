import { FunctionComponent } from 'react';
import { CART_IMG, CART_SVG } from 'constants/constants';
import { Button } from 'sharedComponents/Button';
import { useDispatch, useSelector } from 'react-redux';
import { productCartSelector, totalPriceSelector } from 'store/selectors/cart';
import { deleteAllProducts } from 'store/slices/cart';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
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

  const { t } = useTranslation(['Сart']);

  const buyProduct = (): void => {
    toast(`You just bought an item worth ${totalPrice} ${t('currency')}`, {
      position: toast.POSITION.TOP_CENTER,
    });
    setTimeout(() => {
      dispatch(deleteAllProducts());
    }, 4000);
  };

  return (
    <div className={classes.cart}>
      <h1 className={classes.name}>{t('Shopping cart')}</h1>
      {!products.length ? (
        <EmptyCart />
      ) : (
        <>
          <div className={classes.totalPrice}>
            <div>{t('total price')}</div>
            <div>{totalPrice}</div>
          </div>
          <Button name={t('buttonName')} className={classes.buyButton} onClick={buyProduct} />
          <ProductCartList />
        </>
      )}
      <div className={classes.info}>
        <CartInfo object={CART_IMG} />
        <CartInfo object={CART_SVG} />
      </div>
      <div className={classes.secure}>{t('purchases')}</div>
    </div>
  );
};
