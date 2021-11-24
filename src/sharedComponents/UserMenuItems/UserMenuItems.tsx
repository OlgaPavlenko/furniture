import { FunctionComponent } from 'react';
import { UserMenuItem } from 'sharedComponents/UserMenuItem';
import { USER_MENU_ITEMS } from 'constants/constants';

export const UserMenuItems: FunctionComponent = () => {
  return (
    <div>
      {USER_MENU_ITEMS.map(({ src, path }) => {
        return <UserMenuItem key={src} src={src} path={path} />;
      })}
    </div>
  );
};
