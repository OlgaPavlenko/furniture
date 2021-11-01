// import { IInitialState } from 'store/slices/filter-slice';

interface IState {
  filter: [];
}

export const filterListSelector = (state: IState) => state.filter;
export const filterList = 'o';
