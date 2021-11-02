import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PATH } from 'constants/constants';
import HTTPService from '../../utils/services/httpService';
import { ICompany } from 'utils/interfaces/product';
import { ICountry } from 'utils/interfaces/product';
import { IMaterial } from 'utils/interfaces/product';

export interface IInitialFilterState {
  countries: ICountry[];
  companies: ICompany[];
  materials: IMaterial[];
}

const initialState: IInitialFilterState = {
  countries: [],
  companies: [],
  materials: [],
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

export const filterSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCountriesAsync.fulfilled, (state, action) => {
        state.countries = [...state.countries, ...action.payload.data];
      })
      .addCase(getMaterialsAsync.fulfilled, (state, action) => {
        state.companies = [...state.companies, ...action.payload.data];
      })
      .addCase(getCompaniesAsync.fulfilled, (state, action) => {
        state.materials = [...state.materials, ...action.payload.data];
      });
  },
});

export const filterReducer = filterSlice.reducer;
