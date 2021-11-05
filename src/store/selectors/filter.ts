import { IRootState } from 'store/store';

export const filterListSelector = (state: IRootState) => state.filter.categories;

export const filterMinPriceSelector = (state: IRootState) => state.filter.minPrice;

export const filterMaxPriceSelector = (state: IRootState) => state.filter.maxPrice;
