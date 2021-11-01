import { IProduct } from 'utils/interfaces/product';

interface IProductState {
  product: IProductList;
}

interface IProductList {
  productList: IProduct[];
}

export const stateSelector = (state: IProductState): IProductList => state.product;

export const productListSelector = (state: IProductState) => state.product.productList;
