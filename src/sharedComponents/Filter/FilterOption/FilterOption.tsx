import { FunctionComponent } from 'react';
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
          <div key={category.id} className={classes.checkbox}>
            <label htmlFor="material.name">
              <input
                type="checkbox"
                id="material.name"
                name={category.name}
                value={category.name}
                className={classes.customCheckbox}
              ></input>
              <span>{category.name}</span>
            </label>
          </div>
        );
      })}
    </div>
  );
};
