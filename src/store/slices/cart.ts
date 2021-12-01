import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PATH } from 'constants/constants';
import HTTPService from 'store/utils/services/httpService';
import { IProduct } from 'store/utils/interfaces/product';

interface IInitialState {
  cartList: IProduct[];
}

const initialState: IInitialState = {
  cartList: [],
};

export const addProductToCart = createAsyncThunk('addProductToCart/fetch', async (id: string) => {
  const response = await HTTPService.get(`${PATH.products}/${id}`);
  return response;
});

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    deleteProduct(state, action) {
      state.cartList = state.cartList.filter((product) => product.id !== action.payload);
    },
    deleteAllProducts(state) {
      state.cartList = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addProductToCart.fulfilled, (state, action) => {
      state.cartList = [...state.cartList, action.payload.data];
    });
  },
});

export const cartReducer = cartSlice.reducer;
export const { deleteAllProducts, deleteProduct } = cartSlice.actions;
