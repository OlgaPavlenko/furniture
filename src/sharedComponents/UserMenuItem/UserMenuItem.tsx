import { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';

interface IUserMenuItemsSrc {
  src: string;
  path: string;
}
export const UserMenuItem: FunctionComponent<IUserMenuItemsSrc> = ({ src, path }) => {
  return (
    <NavLink to={path}>
      <img src={src} />
    </NavLink>
  );
};
