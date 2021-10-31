import { IInitialState } from 'store/slices/filter-slice';

interface IState {
  filter: [];
}

export const stateSelector = (state: IState) => state.filter;

export const filterListSelector = (state: IInitialState) => state;
