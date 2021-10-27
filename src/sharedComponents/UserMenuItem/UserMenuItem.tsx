import { FunctionComponent } from 'react';

interface IUserMenuItems {
  src: string;
}

export const UserMenuItem: FunctionComponent<IUserMenuItems> = ({ src }) => {
  return (
    <a href="#">
      <img src={src} />
    </a>
  );
};
