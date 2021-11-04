import { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';
import { CustomCheckbox } from 'sharedComponents/CustomCheckbox';
import { ICategory } from 'utils/interfaces/product';
import { useStyle } from './style';

interface IFilterOption {
  name: string;
  categories: ICategory[];
  filterState: Record<string, boolean | undefined>;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const FilterOption: FunctionComponent<IFilterOption> = ({
  name,
  categories,
  filterState,
  onChange,
}) => {
  const classes = useStyle();

  return (
    <div className={classes.panel}>
      <div className={classes.accordion}>{name}</div>
      {categories.map((category: ICategory) => {
        return filterState[category.name] !== undefined ? (
          <CustomCheckbox
            key={category.id}
            name={category.name}
            className={classes.checkbox}
            classNameCustomCheckbox={classes.customCheckbox}
            checked={filterState[category.name]}
            onChange={onChange}
          />
        ) : null;
      })}
    </div>
  );
};
