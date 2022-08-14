import { IRootState } from 'store/store';
import { IProductWithQuantity } from 'utils/interfaces/product';

export const productCartSelector = (state: IRootState): IProductWithQuantity[] =>
  state.cart.cartList;

export const totalPriceSelector = (state: IRootState): number =>
  state.cart.cartList.reduce((acc, product) => acc + product.quantity * product.product.price, 0);
