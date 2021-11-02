interface IState {
  search: [];
}

export const productsBySearchSelector = (state: IState) => state.search;
