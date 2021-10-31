import { FunctionComponent } from 'react';
import { useStyle } from './style';

export const FilterOption: FunctionComponent = () => {
  const classes = useStyle();

  return (
    <>
      <div className={classes.accordion}></div>
      <div className={classes.panel}>
        <div className={classes.checkbox}>
          <label htmlFor="material.name">
            <input
              type="checkbox"
              id="material.name"
              name="material.name"
              value="material.name"
            ></input>
            <span>'material.name'</span>
          </label>
        </div>
      </div>
    </>
  );
};
