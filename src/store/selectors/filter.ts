import { ICategoryGroup, IFilter } from 'store/slices/filter';
import { IRootState } from 'store/store';

export const categoriesSelector = (state: IRootState): ICategoryGroup[] => state.filter.categories;

export const filterMinPriceSelector = (state: IRootState): number => state.filter.minPrice;

export const filterMaxPriceSelector = (state: IRootState): number => state.filter.maxPrice;

export const querySelector = (state: IRootState): string => state.filter.searchQuery;

export const filtersSelector = (state: IRootState): IFilter => state.filter.filters;
