import { IRootState } from 'store/store';

export const productListSelector = (state: IRootState) => state.product.productList;

export const currentProductSelector = (state: IRootState) => state.product.currentProduct;
