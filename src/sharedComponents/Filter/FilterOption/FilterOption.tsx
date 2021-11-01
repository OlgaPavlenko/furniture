import { FunctionComponent } from 'react';
import { useStyle } from './style';

interface IFilterOption {
  name: string;
}

export const FilterOption: FunctionComponent<IFilterOption> = ({ name }) => {
  const classes = useStyle();

  return (
    <div className={classes.panel}>
      <div className={classes.checkbox}>
        <label htmlFor="material.name">
          <input
            type="checkbox"
            id="material.name"
            name="material.name"
            value="material.name"
          ></input>
          <span>{name}</span>
        </label>
      </div>
    </div>
  );
};
