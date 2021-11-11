import { FunctionComponent, SyntheticEvent, useEffect } from 'react';
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
  ICategoryGroup,
  IFilter,
  setFiltersQuery,
} from 'store/slices/filter';
import {
  categoriesSelector,
  filterMaxPriceSelector,
  filterMinPriceSelector,
  filtersSelector,
} from 'store/selectors/filter';

export const Filter: FunctionComponent = () => {
  const categoryGroups: ICategoryGroup[] = useSelector(categoriesSelector);
  const minPrice = useSelector(filterMinPriceSelector);
  const maxPrice = useSelector(filterMaxPriceSelector);
  const classes = useStyle();
  const dispatch = useDispatch();
  const filter = useSelector(filtersSelector);

  useEffect(() => {
    dispatch(getCountriesAsync());
    dispatch(getCompaniesAsync());
    dispatch(getMaterialsAsync());
    dispatch(getPriceAsync());
  }, []);

  const onChange = (categoryGroupName: string, name: string) => {
    dispatch(setFiltersQuery({ name, categoryGroupName }));
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
      {categoryGroups.map((categoryGroup: ICategoryGroup) => {
        return (
          <FilterOption
            key={categoryGroup.name}
            categoryGroupName={categoryGroup.name}
            categories={categoryGroup.filterOptions.map((filter) => filter.name)}
            filterState={filter}
            onChange={onChange}
          />
        );
      })}
      <Button name="Reset Options" className={classes.clearButton} onClick={resetFilter} />
    </form>
  );
};
