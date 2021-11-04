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
import { ICategory } from 'utils/interfaces/product';

export const Filter: FunctionComponent = () => {
  const filter: ICategories = useSelector(filterListSelector);
  const minPrice = useSelector(filterMinPriceSelector);
  const maxPrice = useSelector(filterMaxPriceSelector);
  const classes = useStyle();
  const dispatch = useDispatch();
  const [filterState, setFilterState] = useState<Record<string, boolean>>({});

  useEffect(() => {
    dispatch(getCountriesAsync());
    dispatch(getCompaniesAsync());
    dispatch(getMaterialsAsync());
    dispatch(getPriceAsync());
  }, []);

  useEffect(() => {
    setFilterState(() => {
      return setInitialFilterState();
    });
  }, [filter]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilterState({ ...filterState, [event.target.name]: event.target.checked });
  };

  const resetFilter = (e: SyntheticEvent) => {
    e.preventDefault();
    setFilterState(() => {
      return setInitialFilterState();
    });
  };

  const setInitialFilterState = () => {
    const checked: Record<string, boolean> = {};

    const filterKeys = Object.values(filter)
      .map((category) => category.map(({ name }: ICategory) => name))
      .flat();

    filterKeys.forEach((key: string) => {
      checked[key] = false;
    });

    return checked;
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className={classes.filter}
    >
      <PriceInputs minPrice={minPrice} maxPrice={maxPrice} />
      {Object.keys(filter).map((name: string) => {
        return (
          <FilterOption
            key={name}
            name={name}
            categories={filter[name as keyof ICategories]}
            filterState={filterState}
            onChange={onChange}
          />
        );
      })}
      <Button name="Reset Options" className={classes.clearButton} onClick={resetFilter} />
    </form>
  );
};
