import { FilterOption } from './../../sharedComponents/Filter/FilterOption';
import { ICategory } from './../../utils/interfaces/product';
import { IRootState } from './../store';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PATH } from 'constants/constants';
import HTTPService from '../../utils/services/httpService';
import { IProduct } from 'utils/interfaces/product';
import { createPath } from 'utils/url';
import { setProductList } from './product';
import {
  filterMaxPriceSelector,
  filterMinPriceSelector,
  filtersSelector,
  querySelector,
} from 'store/selectors/filter';

export interface ICategoryGroup {
  name: string;
  filterOptions: ICategory[];
}

export interface IFilter {
  [key: string]: string[];
}

export interface IInitialFilterState {
  searchQuery: string;
  categories: ICategoryGroup[];
  filters: IFilter;
  minPrice: number;
  maxPrice: number;
}

const initialState: IInitialFilterState = {
  searchQuery: '',
  categories: [],
  filters: {},
  minPrice: 0,
  maxPrice: 500,
};

export const getFiltersAsync = createAsyncThunk('categories/fetch', () => {
  const response = Promise.all(
    Object.entries(PATH.categories).map(async ([categoryGroup, category]) => ({
      categoryGroup: categoryGroup,
      categories: await HTTPService.get(category),
    })),
  );
  return response;
});

export const getCountriesAsync = createAsyncThunk('countries/fetch', async () => {
  const response = await HTTPService.get(PATH.categories.countries);
  return response;
});

export const getCompaniesAsync = createAsyncThunk('companies/fetch', async () => {
  const response = await HTTPService.get(PATH.categories.companies);
  return response;
});

export const getMaterialsAsync = createAsyncThunk('materials/fetch', async () => {
  const response = await HTTPService.get(PATH.categories.materials);
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
  async (_, { getState, dispatch }) => {
    const searchQuery = querySelector(getState() as IRootState);

    const filters = filtersSelector(getState() as IRootState);

    const minPrice = filterMinPriceSelector(getState() as IRootState);
    const maxPrice = filterMaxPriceSelector(getState() as IRootState);

    const path = createPath({
      searchQuery,
      filters,
      minPrice,
      maxPrice,
    });

    const { data: products } = await HTTPService.get(path);
    dispatch(setProductList(products));
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
      const { name, categoryGroupName } = action.payload;

      if (state.filters[categoryGroupName]?.includes(name)) {
        state.filters[categoryGroupName] = state.filters[categoryGroupName]?.filter(
          (category) => category !== name,
        );
      } else {
        state.filters[categoryGroupName]?.push(name);
      }
    },
    resetFilters(state) {
      Object.keys(state.filters).forEach((categoryGroup) => (state.filters[categoryGroup] = []));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFiltersAsync.fulfilled, (state, action) => {
        const categories = action.payload.map(({ categories, categoryGroup }) => ({
          name: categoryGroup,
          filterOptions: categories.data,
        }));

        const defaultFilters = action.payload.reduce((acc, { categoryGroup }) => {
          const newCategory = { [categoryGroup]: [] };
          return { ...acc, ...newCategory };
        }, {});

        state.categories = [...state.categories, ...categories];
        state.filters = { ...state.filters, ...defaultFilters };
      })
      .addCase(getPriceAsync.fulfilled, (state, action) => {
        const { minPrice, maxPrice } = action.payload;
        state.minPrice = minPrice;
        state.maxPrice = maxPrice;
      });
  },
});

export const filterReducer = filterSlice.reducer;
export const { setMinPrice, setMaxPrice, setSearchQuery, setFiltersQuery, resetFilters } =
  filterSlice.actions;
