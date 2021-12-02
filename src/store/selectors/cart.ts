import { IProps } from 'store/slices/cart';
import { IRootState } from 'store/store';

export const productCartSelector = (state: IRootState): IProps[] => state.cart.cartList;

// export const productQuantitySelector = (state: IRootState): number =>
//   state.cart.cartList[0].quantity;
