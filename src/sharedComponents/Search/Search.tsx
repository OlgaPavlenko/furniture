import { ChangeEvent, FunctionComponent, useEffect } from 'react';
import { useStyle } from './styles';

import { Input } from 'sharedComponents/Input/Input';
import { SearchType } from 'utils/interfaces/enums';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsWithQuery } from 'store/slices/search';
import { querySelector } from 'store/selectors/search';

export const Search: FunctionComponent = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const search = require('assets/icons/icon.svg').default as string;
  const searchQuery = useSelector(querySelector);

  const getSearchQuery = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    dispatch(getProductsWithQuery(event.target?.value));
  };

  useEffect(() => {
    searchQuery ? dispatch(getProductsWithQuery(searchQuery)) : null;
  }, [searchQuery]);

  return (
    <div className={classes.searchWrap}>
      <Input
        type={SearchType.search}
        onChange={getSearchQuery}
        value={searchQuery}
        className={classes.searchInput}
      />
      <img src={search} alt="search" className={classes.searchInputImg} />
    </div>
  );
};
