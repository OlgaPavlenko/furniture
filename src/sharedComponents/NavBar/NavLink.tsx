import { DOMAttributes, FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';

interface INavLink extends DOMAttributes<HTMLElement> {
  text?: string;
  to: string;
  className?: string;
  linkClassName?: string;
}

export const LinkForNavBar: FunctionComponent<INavLink> = ({
  text,
  to,
  className,
  linkClassName,
}) => {
  return (
    <li className={className}>
      <NavLink to={to} className={linkClassName}>
        {text}
      </NavLink>
    </li>
  );
};
