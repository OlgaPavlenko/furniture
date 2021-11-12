import { IRootState } from 'store/store';

export const categoriesSelector = (state: IRootState) => state.filter.categories;

export const filterMinPriceSelector = (state: IRootState) => state.filter.minPrice;

export const filterMaxPriceSelector = (state: IRootState) => state.filter.maxPrice;

export const querySelector = (state: IRootState) => state.filter.searchQuery;

export const filtersSelector = (state: IRootState) => state.filter.filters;
