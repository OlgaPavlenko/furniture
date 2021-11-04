import { FunctionComponent, SyntheticEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useStyle } from './style';

import { FilterOption } from './FilterOption';
import { PriceInputs } from './PriceInputs';
import { Button } from '../Button';
import {
  clearFilter,
  getCompaniesAsync,
  getCountriesAsync,
  getMaterialsAsync,
  getPriceAsync,
} from 'store/slices/filter';
import {
  filterListSelector,
  filterMaxPriceSelector,
  filterMinPriceSelector,
} from 'store/selectors/filter';
import { ICategories } from 'utils/interfaces/filter';



export const Filter: FunctionComponent = () => {
  const filter: ICategories = useSelector(filterListSelector);
  const minPrice: number = useSelector(filterMinPriceSelector);
  const maxPrice: number = useSelector(filterMaxPriceSelector);
  const classes = useStyle();
  const dispatch = useDispatch();

  useEffect(() => {
    getInitialFilters();
  }, []);

  const resetFilter = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(clearFilter());
    getInitialFilters();
  };

  const getInitialFilters = () => {
    dispatch(getCountriesAsync());
    dispatch(getCompaniesAsync());
    dispatch(getMaterialsAsync());
    dispatch(getPriceAsync());
  };

  return (
    <form className={classes.filter}>
      <PriceInputs minPrice={minPrice} maxPrice={maxPrice} />
      {Object.keys(filter).map((name: string) => {
        return (
          <FilterOption key={name} name={name} categories={filter[name as keyof ICategories]} />
        );
      })}
      <Button name="Reset Options" className={classes.clearButton} onClick={resetFilter} />
    </form>
  );
};
