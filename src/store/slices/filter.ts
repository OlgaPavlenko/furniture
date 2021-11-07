import { IRootState } from './../store';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PATH } from 'constants/constants';
import HTTPService from '../../utils/services/httpService';
import { IProduct } from 'utils/interfaces/product';
import { ICategories } from 'utils/interfaces/filter';
import { createPath } from 'utils/url';
import { setProductList } from './product';
import {
  filterMaxPriceSelector,
  filterMinPriceSelector,
  filtersSelector,
  querySelector,
} from 'store/selectors/filter';
export interface IInitialFilterState {
  searchQuery: string;
  categories: ICategories;
  filters: string[];
  minPrice: number;
  maxPrice: number;
}

const initialState: IInitialFilterState = {
  searchQuery: '',
  categories: {
    countries: [],
    companies: [],
    materials: [],
  },
  filters: [],
  minPrice: 0,
  maxPrice: 500,
};

export const getCountriesAsync = createAsyncThunk('countries/fetch', async () => {
  const response = await HTTPService.get(PATH.countries);
  return response;
});

export const getCompaniesAsync = createAsyncThunk('companies/fetch', async () => {
  const response = await HTTPService.get(PATH.companies);
  return response;
});

export const getMaterialsAsync = createAsyncThunk('materials/fetch', async () => {
  const response = await HTTPService.get(PATH.materials);
  return response;
});

export const getPriceAsync = createAsyncThunk('price/fetch', async () => {
  const { data: products } = await HTTPService.get(PATH.products);

  const prices = products.map((product: IProduct) => product.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  return { minPrice, maxPrice };
});

export const getProductsListWithQuery = createAsyncThunk(
  'products/getFilteredProductsList',
  async (_, store) => {
    const searchQuery = querySelector(store.getState() as IRootState);

    const filters = filtersSelector(store.getState() as IRootState);

    const minPrice = filterMinPriceSelector(store.getState() as IRootState);
    const maxPrice = filterMaxPriceSelector(store.getState() as IRootState);

    const path = createPath({
      searchQuery,
      filters,
      minPrice,
      maxPrice,
    });

    const { data: products } = await HTTPService.get(path);
    store.dispatch(setProductList(products));
  },
);

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setMinPrice(state, action) {
      state.minPrice = action.payload;
    },
    setMaxPrice(state, action) {
      state.maxPrice = action.payload;
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    setFiltersQuery(state, action) {
      state.filters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCountriesAsync.fulfilled, (state, action) => {
        state.categories.countries = [...state.categories.countries, ...action.payload.data];
      })
      .addCase(getMaterialsAsync.fulfilled, (state, action) => {
        state.categories.materials = [...state.categories.materials, ...action.payload.data];
      })
      .addCase(getCompaniesAsync.fulfilled, (state, action) => {
        state.categories.companies = [...state.categories.companies, ...action.payload.data];
      })
      .addCase(getPriceAsync.fulfilled, (state, action) => {
        const { minPrice, maxPrice } = action.payload;
        state.minPrice = minPrice;
        state.maxPrice = maxPrice;
      });
  },
});

export const filterReducer = filterSlice.reducer;
export const { setMinPrice, setMaxPrice, setSearchQuery, setFiltersQuery } = filterSlice.actions;
