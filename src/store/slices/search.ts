import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PATH } from 'constants/constants';
import HTTPService from '../../utils/services/httpService';
import { IProduct } from 'utils/interfaces/product';

export interface IInitialFilterState {
  searchList: IProduct[];
  searchQuery: string;
}

const initialState: IInitialFilterState = {
  searchList: [],
  searchQuery: '',
};

export const getProductsWithQuery = createAsyncThunk('search/fetch', (searchQuery: string) => {
  const response = HTTPService.get(`${PATH.products}?name_like=${searchQuery}`);
  return response;
});

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsWithQuery.fulfilled, (state, action) => {
      state.searchList = [...action.payload.data];
      state.searchQuery = action.meta.arg;
    });
  },
});

export const searchReducer = searchSlice.reducer;
