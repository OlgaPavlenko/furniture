import { ChangeEvent, DOMAttributes, FunctionComponent } from 'react';

interface ICheckbox extends DOMAttributes<HTMLElement> {
  id?: string;
  name?: string;
  checked?: boolean;
  className?: string;
  classNameCustomCheckbox?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  shouldConcatHref?: boolean;
}

export const CustomCheckbox: FunctionComponent<ICheckbox> = ({
  name,
  className,
  classNameCustomCheckbox,
  checked,
  onChange,
}) => {
  return (
    <div className={className}>
      <label htmlFor={name}>
        <input
          type="checkbox"
          name={name}
          className={classNameCustomCheckbox}
          onChange={onChange}
          checked={checked}
        />
        <span>{name}</span>
      </label>
    </div>
  );
};
