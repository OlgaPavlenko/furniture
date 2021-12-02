import { IProps } from 'store/slices/cart';
import { IRootState } from 'store/store';

export const productCartSelector = (state: IRootState): IProps[] => state.cart.cartList;
