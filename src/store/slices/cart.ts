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
          product.product.image !== action.payload.image,
      );
    },
    deleteAllProducts(state) {
      state.cartList = [];
    },
    setQuantity(state, action) {
      state.cartList.forEach((product) => {
        if (product.product.id === action.payload.productId) {
          product.quantity = action.payload.quantity;
        }
        return product;
      });
    },

    addProduct(state, action) {
      let isInCart = false;
      state.cartList.find(({ product }) => {
        if (product.id === action.payload.id && product.image === action.payload.image) {
          toast('product already in the cart!', {
            position: toast.POSITION.TOP_CENTER,
          });
          isInCart = true;
        }
        return isInCart;
      });
      if (!isInCart) {
        state.cartList.push({ product: action.payload, quantity: 1 });
      }
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { deleteAllProducts, deleteProduct, setQuantity, addProduct } = cartSlice.actions;
