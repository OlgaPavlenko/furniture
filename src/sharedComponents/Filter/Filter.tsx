import { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useStyle } from './style';

import { FilterOption } from './FilterOption';
import { getCompaniesAsync, getCountriesAsync, getMaterialsAsync } from 'store/slices/filter';
import { filterListSelector } from '../../store/selectors/filter';

export const Filter: FunctionComponent = () => {
  const filter = useSelector(filterListSelector);
  const classes = useStyle();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountriesAsync());
    dispatch(getCompaniesAsync());
    dispatch(getMaterialsAsync());
  }, []);

  return (
    <form className={classes.filter}>
      <div className={classes.accordion}>
        {Object.values(filter)?.map((filterOption: any) => {
          return filterOption.map((filterItem: any) => (
            <FilterOption key={filterItem.id} name={filterItem.name} />
          ));
        })}
      </div>
    </form>
  );
};
