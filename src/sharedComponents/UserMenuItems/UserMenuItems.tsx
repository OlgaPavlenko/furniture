import { FunctionComponent } from 'react';
import { UserMenuItem } from 'sharedComponents/UserMenuItem';
import { USER_MENU_ITEMS } from 'constants/constants';

export const UserMenuItems: FunctionComponent = () => {
  return (
    <div>
      {USER_MENU_ITEMS.map((key, index) => {
        return <UserMenuItem key={index} src={key.src} path={key.path} />;
      })}
    </div>
  );
};
