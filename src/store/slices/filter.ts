import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PATH } from 'constants/constants';
import HTTPService from '../../utils/services/httpService';
import { ICompany } from 'utils/interfaces/product';
import { ICountry } from 'utils/interfaces/product';
import { IMaterial } from 'utils/interfaces/product';

export interface IInitialState {
  countriesList: ICountry[];
  companiesList: ICompany[];
  materialsList: IMaterial[];
}

const initialState: IInitialState = {
  countriesList: [],
  companiesList: [],
  materialsList: [],
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
        state.countriesList = [...state.countriesList, ...action.payload.data];
      })
      .addCase(getMaterialsAsync.fulfilled, (state, action) => {
        state.companiesList = [...state.companiesList, ...action.payload.data];
      })
      .addCase(getCompaniesAsync.fulfilled, (state, action) => {
        state.materialsList = [...state.materialsList, ...action.payload.data];
      });
  },
});

export const filterReducer = filterSlice.reducer;
