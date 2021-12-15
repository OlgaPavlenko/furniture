import { createSlice } from '@reduxjs/toolkit';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

import { IProductWithQuantity } from 'store/utils/interfaces/product';

export interface ICart {
  cartList: IProductWithQuantity[];
}

const initialState: ICart = {
  cartList: [],
};

toast.configure();

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    deleteProduct(state, action) {
      state.cartList = state.cartList.filter(
        (product) =>
          product.product.id !== action.payload.id ||
          product.product.productVariant !== action.payload.productVariant,
      );
    },
    deleteAllProducts(state) {
      state.cartList = [];
    },

    setQuantity(state, action) {
      state.cartList.forEach((product) => {
        if (
          product.product.id === action.payload.productId &&
          product.product.productVariant === action.payload.productVariant
        ) {
          product.quantity = action.payload.quantity;
        }
        return product;
      });
    },

    addProduct(state, action) {
      let isInCartFlag = false;
      state.cartList.forEach((product) => {
        if (
          product.product.id === action.payload.id &&
          product.product.productVariant === action.payload.productVariant &&
          product.isInCart
        ) {
          toast('product already in the cart!', {
            position: toast.POSITION.TOP_CENTER,
          });
          isInCartFlag = true;
        }
        return isInCartFlag;
      });
      if (!isInCartFlag) {
        state.cartList.push({ product: action.payload, quantity: 1, isInCart: true });
      }
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { deleteAllProducts, deleteProduct, setQuantity, addProduct } = cartSlice.actions;
