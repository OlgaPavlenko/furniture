import { IRootState } from 'store/store';

export const productListSelector = (state: IRootState) => state.product.productList;
