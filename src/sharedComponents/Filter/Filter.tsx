import { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useStyle } from './style';

import { FilterOption } from './FilterOption';
import { getCompaniesAsync, getCountriesAsync, getMaterialsAsync } from 'store/slices/filter';
import { filterListSelector } from 'store/selectors/filter';

interface IFilter {}

export const Filter: FunctionComponent = () => {
  const filter: IFilter = useSelector(filterListSelector);
  const classes = useStyle();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountriesAsync());
    dispatch(getCompaniesAsync());
    dispatch(getMaterialsAsync());
  }, []);

  return (
    <form className={classes.filter}>
      {Object.keys(filter).map((name: string) => {
        return <FilterOption key={name} name={name} categories={filter[name as keyof IFilter]} />;
      })}
    </form>
  );
};
