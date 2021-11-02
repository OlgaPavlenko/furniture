import { DOMAttributes, FunctionComponent, SyntheticEvent } from 'react';

interface ICheckbox extends DOMAttributes<HTMLElement> {
  id?: string;
  name?: string;
  value?: string;
  className?: string;
  classNameCustomCheckbox?: string;
  onClick?: (event: SyntheticEvent) => void;
  shouldConcatHref?: boolean;
}

export const CustomCheckbox: FunctionComponent<ICheckbox> = ({
  name,
  value,
  className,
  classNameCustomCheckbox,
  onClick,
}) => {
  return (
    <div className={className}>
      <label htmlFor={name}>
        <input
          type="checkbox"
          name={name}
          value={value}
          className={classNameCustomCheckbox}
          onClick={onClick}
        ></input>
        <span>{name}</span>
      </label>
    </div>
  );
};
