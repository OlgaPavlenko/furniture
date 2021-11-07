import { ChangeEvent, FunctionComponent, SyntheticEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useStyle } from './style';

import { FilterOption } from './FilterOption';
import { PriceInputs } from './PriceInputs';
import { Button } from '../Button';
import {
  getCompaniesAsync,
  getCountriesAsync,
  getMaterialsAsync,
  getPriceAsync,
  getProductsListWithQuery,
  setFiltersQuery,
} from 'store/slices/filter';
import {
  filterListSelector,
  filterMaxPriceSelector,
  filterMinPriceSelector,
  filtersSelector,
} from 'store/selectors/filter';
import { ICategories } from 'utils/interfaces/filter';

export const Filter: FunctionComponent = () => {
  const filter: ICategories = useSelector(filterListSelector);
  const minPrice = useSelector(filterMinPriceSelector);
  const maxPrice = useSelector(filterMaxPriceSelector);
  const classes = useStyle();
  const dispatch = useDispatch();
  const filtersQuery = useSelector(filtersSelector);

  useEffect(() => {
    dispatch(getCountriesAsync());
    dispatch(getCompaniesAsync());
    dispatch(getMaterialsAsync());
    dispatch(getPriceAsync());
  }, []);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (filtersQuery.includes(event.target.name)) {
      dispatch(setFiltersQuery(filtersQuery.filter((item) => item !== event.target.name)));
    } else {
      dispatch(setFiltersQuery([...filtersQuery, event.target.name]));
    }
    dispatch(getProductsListWithQuery());
  };

  const resetFilter = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(setFiltersQuery([]));
    dispatch(getProductsListWithQuery());
  };

  return (
    <form className={classes.filter}>
      <PriceInputs minPrice={minPrice} maxPrice={maxPrice} />
      {Object.keys(filter).map((name: string) => {
        return (
          <FilterOption
            key={name}
            name={name}
            categories={filter[name as keyof ICategories]}
            filterState={filtersQuery}
            onChange={onChange}
          />
        );
      })}
      <Button name="Reset Options" className={classes.clearButton} onClick={resetFilter} />
    </form>
  );
};
