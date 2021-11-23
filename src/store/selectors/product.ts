import { IRootState } from 'store/store';
import { IProduct } from 'utils/interfaces/product';

export const productListSelector = (state: IRootState): IProduct[] => state.product.productList;

export const currentProductSelector = (state: IRootState): IProduct => state.product.currentProduct;

export const isListVeiwSelector = (state: IRootState): boolean => state.product.isListVeiw;
