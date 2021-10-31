import { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useStyle } from './style';

import { FilterOption } from './FilterOption';
import { filterListSelector } from 'store/selectors/filter-selector';
import { getCompaniesAsync, getCountriesAsync, getMaterialsAsync } from 'store/slices/filter-slice';

export const Filter: FunctionComponent = () => {
  const filter = useSelector(filterListSelector);
  const classes = useStyle();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountriesAsync());
    dispatch(getCompaniesAsync());
    dispatch(getMaterialsAsync());
    console.log(filter);
  }, []);

  return (
    <form className={classes.filter}>
      {}
      <FilterOption />
    </form>
  );
};
