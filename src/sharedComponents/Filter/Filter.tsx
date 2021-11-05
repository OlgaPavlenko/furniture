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
} from 'store/slices/filter';
import {
  filterListSelector,
  filterMaxPriceSelector,
  filterMinPriceSelector,
} from 'store/selectors/filter';
import { ICategories } from 'utils/interfaces/filter';
import { createPath } from '../../utils/url';

export const Filter: FunctionComponent = () => {
  const filter: ICategories = useSelector(filterListSelector);
  const minPrice = useSelector(filterMinPriceSelector);
  const maxPrice = useSelector(filterMaxPriceSelector);
  const classes = useStyle();
  const dispatch = useDispatch();
  const [filtersChecked, setFiltersChecked] = useState<string[]>([]);

  useEffect(() => {
    dispatch(getCountriesAsync());
    dispatch(getCompaniesAsync());
    dispatch(getMaterialsAsync());
    dispatch(getPriceAsync());
    createPath({ searchQuery: 'italy', filters: ['metal', 'ikea', 'wood'] });
  }, []);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (filtersChecked.includes(event.target.name)) {
      setFiltersChecked(filtersChecked.filter((item) => item !== event.target.name));
    } else {
      setFiltersChecked([...filtersChecked, event.target.name]);
    }
  };

  const resetFilter = (e: SyntheticEvent) => {
    e.preventDefault();

    setFiltersChecked([]);
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
            filterState={filtersChecked}
            onChange={onChange}
          />
        );
      })}
      <Button name="Reset Options" className={classes.clearButton} onClick={resetFilter} />
    </form>
  );
};
