import { FunctionComponent } from 'react';

interface IUserMenuItemsSrc {
  src: string;
}
export const UserMenuItem: FunctionComponent<IUserMenuItemsSrc> = ({ src }) => {
  return (
    <a href="#">
      <img src={src} />
    </a>
  );
};
