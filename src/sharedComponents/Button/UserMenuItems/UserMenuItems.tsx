import { FunctionComponent } from 'react';
import { UserMenuItem } from 'sharedComponents/UserMenuItem/UserMenuItem';
import { userMenuItems } from 'constants/constants';

interface IUserMenuItems {
  login: string;
  cart: string;
}

export const UserMenuItems: FunctionComponent = () => {
  return (
    <div>
      {Object.keys(userMenuItems as IUserMenuItems).map((key) => {
        return <UserMenuItem key={key} src={userMenuItems[key as keyof IUserMenuItems]} />;
      })}
    </div>
  );
};
