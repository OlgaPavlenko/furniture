import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PATH } from 'constants/constants';
import HTTPService from '../../utils/services/httpService';
import { ICompany, IProduct } from 'utils/interfaces/product';
import { ICountry } from 'utils/interfaces/product';
import { IMaterial } from 'utils/interfaces/product';

export interface ICategories {
  countries: ICountry[];
  companies: ICompany[];
  materials: IMaterial[];
}

export interface IInitialFilterState {
  categories: ICategories;
  minPrice: number;
  maxPrice: number;
}

const initialState: IInitialFilterState = {
  categories: {
    countries: [],
    companies: [],
    materials: [],
  },
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

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    clearFilter() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCountriesAsync.fulfilled, (state, action) => {
        state.categories.countries = [...state.categories.countries, ...action.payload.data];
      })
      .addCase(getMaterialsAsync.fulfilled, (state, action) => {
        state.categories.companies = [...state.categories.companies, ...action.payload.data];
      })
      .addCase(getCompaniesAsync.fulfilled, (state, action) => {
        state.categories.materials = [...state.categories.materials, ...action.payload.data];
      })
      .addCase(getPriceAsync.fulfilled, (state, action) => {
        const { minPrice, maxPrice } = action.payload;
        state.minPrice = minPrice;
        state.maxPrice = maxPrice;
      });
  },
});

export const filterReducer = filterSlice.reducer;
export const { clearFilter } = filterSlice.actions;
