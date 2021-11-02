import { FunctionComponent } from 'react';
import { CustomCheckbox } from 'sharedComponents/CustomCheckbox';
import { ICategory } from 'utils/interfaces/product';
import { useStyle } from './style';

interface IFilterOption {
  name: string;
  categories: ICategory[];
}

export const FilterOption: FunctionComponent<IFilterOption> = ({ name, categories }) => {
  const classes = useStyle();

  return (
    <div className={classes.panel}>
      <div className={classes.accordion}>{name}</div>
      {categories.map((category: ICategory) => {
        return (
          <CustomCheckbox
            key={category.id}
            name={category.name}
            value={category.name}
            className={classes.checkbox}
            classNameCustomCheckbox={classes.customCheckbox}
          />
        );
      })}
    </div>
  );
};
