import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PATH } from 'constants/constants';
import HTTPService from 'services/httpService';
import { IProduct } from 'utils/interfaces/productInterface/product.interface';

interface IInitialState {
  productList: IProduct[];
}

const initialState: IInitialState = {
  productList: [],
};

export const getProductsAsync = createAsyncThunk('products/fetch', async () => {
  const response = await HTTPService.get(PATH.products);
  return response;
});

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsAsync.fulfilled, (state, action) => {
      state.productList = [...state.productList, ...action.payload.data];
    });
  },
});

export const productReducer = productSlice.reducer;
