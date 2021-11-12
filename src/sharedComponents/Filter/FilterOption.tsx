import { FunctionComponent } from 'react';
import { CustomCheckbox } from 'sharedComponents/CustomCheckbox';
import { IFilter } from 'store/slices/filter';
import { useStyle } from './style';

interface IFilterOption {
  categoryGroupName: string;
  value?: string;
  categories: string[];
  filterState: IFilter;
  onChange: (categoryGroupName: string, name: string) => void;
}

export const FilterOption: FunctionComponent<IFilterOption> = ({
  categoryGroupName,
  categories,
  filterState,
  onChange,
}) => {
  const classes = useStyle();

  return (
    <div className={classes.panel}>
      <div className={classes.accordion}>{categoryGroupName}</div>
      {categories.map((category: string) => {
        return (
          <CustomCheckbox
            key={category}
            name={category}
            categoryGroupName={categoryGroupName}
            className={classes.checkbox}
            classNameCustomCheckbox={classes.customCheckbox}
            checked={filterState[categoryGroupName]?.includes(category)}
            onChange={onChange}
          />
        );
      })}
    </div>
  );
};
