interface IState {
  filter: [];
}

export const filterListSelector = (state: IState) => state.filter;
