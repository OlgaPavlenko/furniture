import { IProduct } from 'utils/interfaces/productInterface/product.interface';

interface IState {
  product: IProduct[];
}

export const stateSelector = (state: IState) => state.product;

export const productListSelector = (state: IProduct) => state.product.productList;
