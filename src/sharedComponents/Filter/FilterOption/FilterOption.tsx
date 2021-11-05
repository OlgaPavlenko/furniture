import { ChangeEvent, FunctionComponent } from 'react';
import { CustomCheckbox } from 'sharedComponents/CustomCheckbox';
import { ICategory } from 'utils/interfaces/product';
import { useStyle } from './style';

interface IFilterOption {
  name: string;
  value?: string;
  categories: ICategory[];
  filterState: string[];
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
        return (
          <CustomCheckbox
            key={category.id}
            name={category.name}
            className={classes.checkbox}
            classNameCustomCheckbox={classes.customCheckbox}
            checked={filterState.includes(category.name)}
            onChange={onChange}
          />
        );
      })}
    </div>
  );
};
