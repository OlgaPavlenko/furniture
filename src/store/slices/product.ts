import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PATH } from 'constants/constants';
import HTTPService from 'utils/services/httpService';
import { IProduct } from 'utils/interfaces/product';

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
  reducers: {
    setProductList(state, action) {
      state.productList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductsAsync.fulfilled, (state, action) => {
      state.productList = [...state.productList, ...action.payload.data];
    });
  },
});

export const productReducer = productSlice.reducer;
export const { setProductList } = productSlice.actions;
