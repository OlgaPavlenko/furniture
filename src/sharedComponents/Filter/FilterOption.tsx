import { FunctionComponent } from 'react';
import { CustomCheckbox } from 'sharedComponents/CustomCheckbox';
import { ICategory } from 'utils/interfaces/product';
import { useStyle } from './style';

interface IFilterOption {
  name: string;
  value?: string;
  categories: string[];
  filterState: ICategory[];
  onChange: (categoryGroupName: string, name: string) => void;
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
      {categories.map((category) => {
        return (
          <CustomCheckbox
            key={category}
            name={category} //filterOption
            categoryGroupName={name}
            className={classes.checkbox}
            classNameCustomCheckbox={classes.customCheckbox}
            checked={filterState.some((filter) => filter.name === category)}
            onChange={onChange}
          />
        );
      })}
    </div>
  );
};
