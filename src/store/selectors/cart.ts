import { IRootState } from 'store/store';
import { IProduct } from 'store/utils/interfaces/product';

export const productCartSelector = (state: IRootState): IProduct[] => state.cart.cartList;
