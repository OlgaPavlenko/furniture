import { FunctionComponent } from 'react';

interface ICheckbox {
  id?: string;
  name: string;
  categoryGroupName: string;
  checked?: boolean;
  className?: string;
  classNameCustomCheckbox?: string;
  onChange: (categoryGroupName: string, name: string) => void;
  shouldConcatHref?: boolean;
}

export const CustomCheckbox: FunctionComponent<ICheckbox> = ({
  name,
  className,
  categoryGroupName,
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
          onChange={() => {
            onChange(categoryGroupName, name);
          }}
          checked={checked}
        />
        <span>{name}</span>
      </label>
    </div>
  );
};
