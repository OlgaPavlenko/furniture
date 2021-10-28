import { FunctionComponent } from 'react';
import { UserMenuItem } from 'sharedComponents/UserMenuItem/UserMenuItem';
import { userMenuItems } from 'constants/constants';

export const UserMenuItems: FunctionComponent = () => {
  return (
    <div>
      {Object.values(userMenuItems).map((item) => {
        return <UserMenuItem key={item} src={item} />;
      })}
    </div>
  );
};
