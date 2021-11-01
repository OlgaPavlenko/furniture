import { FunctionComponent } from 'react';
import { UserMenuItem } from 'sharedComponents/UserMenuItem';
import { USER_MENU_ITEMS } from 'constants/constants';

interface IUserMenuItems {
  login: string;
  cart: string;
}

export const UserMenuItems: FunctionComponent = () => {
  return (
    <div>
      {Object.keys(USER_MENU_ITEMS).map((key) => {
        return <UserMenuItem key={key} src={USER_MENU_ITEMS[key as keyof IUserMenuItems]} />;
      })}
    </div>
  );
};
