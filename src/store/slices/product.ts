import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PATH } from 'constants/constants';
import HTTPService from 'store/utils/services/httpService';
import { IProduct } from 'store/utils/interfaces/product';

interface IInitialState {
  productList: IProduct[];
  currentProduct: IProduct;
  isListVeiw: boolean;
}

const initialState: IInitialState = {
  productList: [],
  currentProduct: {
    id: '',
    name: '',
    category: {
      id: '',
      name: '',
    },
    company: {
      id: '',
      name: '',
      countryId: '',
    },
    size: {
      width: '',
      height: '',
      length: '',
    },
    country: {
      id: '',
      name: '',
    },
    material: [],
    description: '',
    images: [{ id: '', color: '', baseUrl: '', url: '', price: 0 }],
    price: 0,
  },
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
        state.productList = [...action.payload.data];
      })
      .addCase(getProductByIdAsync.fulfilled, (state, action) => {
        state.currentProduct = action.payload.data;
      });
  },
});

export const productReducer = productSlice.reducer;
export const { setProductList, setIsListVeiw } = productSlice.actions;
