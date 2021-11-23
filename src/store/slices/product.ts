import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PATH } from 'constants/constants';
import HTTPService from 'utils/services/httpService';
import { IProduct } from 'utils/interfaces/product';

interface IInitialState {
  productList: IProduct[];
  currentProduct: Record<string, unknown>;
  isListVeiw: boolean;
}

const initialState: IInitialState = {
  productList: [],
  currentProduct: {},
  isListVeiw: false,
};

export const getProductsAsync = createAsyncThunk('products/fetch', async () => {
  const response = await HTTPService.get(PATH.products);
  return response;
});

export const getProductByIdAsync = createAsyncThunk('productById/fetch', async (id: string) => {
  const response = await HTTPService.get(`${PATH.products}/${id}`);
  return response;
});

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductList(state, action) {
      state.productList = action.payload;
    },
    setIsListVeiw(state) {
      state.isListVeiw = !state.isListVeiw;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductsAsync.fulfilled, (state, action) => {
        state.productList = [...state.productList, ...action.payload.data];
      })
      .addCase(getProductByIdAsync.fulfilled, (state, action) => {
        state.currentProduct = action.payload.data;
      });
  },
});

export const productReducer = productSlice.reducer;
export const { setProductList, setIsListVeiw } = productSlice.actions;
