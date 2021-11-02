import { IProduct } from 'utils/interfaces/product';

interface ISearchState {
  search: ISearchList;
}

interface ISearchList {
  searchList: IProduct[];
  searchQuery: string;
}

export const stateSelector = (state: ISearchState): ISearchList => state.search;

export const searchListSelector = (state: ISearchState) => state.search.searchList;

export const querySelector = (state: ISearchState) => state.search.searchQuery;
