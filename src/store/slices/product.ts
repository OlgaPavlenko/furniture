import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import HTTPService from 'services/httpService';
import { IProduct } from 'utils/interfaces/product';

interface IInitialState {
  productList: IProduct[];
  searchResult: IProduct[];
}

const initialState: IInitialState = {
  productList: [],
  searchResult: [],
};

export const getProductsAsync = createAsyncThunk('products/fetch', async () => {
  const response = await HTTPService.get();
  return response;
});

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsAsync.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }

      state.productList = [...state.productList, ...action.payload];
    });
  },
});

export const productReducer = productSlice.reducer;
