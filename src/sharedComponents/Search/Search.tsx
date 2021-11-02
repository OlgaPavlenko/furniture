import { ChangeEvent, FunctionComponent, useState } from 'react';
import { useStyle } from './styles';

import { Button } from 'sharedComponents/Button/Button';
import { Input } from 'sharedComponents/Input/Input';
import { SearchType } from 'utils/interfaces/enums';

export const Search: FunctionComponent = () => {
  const classes = useStyle();
  const search = require('assets/icons/icon.svg').default as string;
  const [searchQuery, setSearchQuery] = useState('');

  const getSearchQuery = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setSearchQuery(event.target?.value);
  };

  console.log(searchQuery);

  return (
    <div className={classes.searchWrap}>
      <Button badgeSrc={search} alt="search" />
      <Input type={SearchType.search} onChange={getSearchQuery} />
    </div>
  );
};
