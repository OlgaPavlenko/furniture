import { FunctionComponent } from 'react';
import { useStyle } from './styles';

import { Button } from 'sharedComponents/Button/Button';
import { Input } from 'sharedComponents/Input/Input';
import { searchType } from 'utils/interfaces/enums';

export const Search: FunctionComponent = () => {
  const classes = useStyle();
  const search = require('assets/icons/icon.svg').default as string;

  return (
    <div className={classes.searchWrap}>
      <Button badgeSrc={search} alt="search" />
      <Input type={searchType.search} />
    </div>
  );
};
