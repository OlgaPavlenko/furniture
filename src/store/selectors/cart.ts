import { IRootState } from 'store/store';
import { IProductWithQuantity } from 'store/utils/interfaces/product';

export const productCartSelector = (state: IRootState): IProductWithQuantity[] =>
  state.cart.cartList;
