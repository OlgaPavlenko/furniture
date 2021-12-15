import { FunctionComponent } from 'react';
import Badge from '@mui/material/Badge';
import { UserMenuItem } from 'sharedComponents/UserMenuItem';
import { USER_MENU_ITEMS } from 'constants/constants';
import { useSelector } from 'react-redux';
import { productCartSelector } from 'store/selectors/cart';

export const UserMenuItems: FunctionComponent = () => {
  const products = useSelector(productCartSelector);
  return (
    <div>
      <UserMenuItem
        key={USER_MENU_ITEMS[0].src}
        src={USER_MENU_ITEMS[0].src}
        path={USER_MENU_ITEMS[0].path}
      />
      <Badge badgeContent={products.length} color="primary">
        <UserMenuItem
          key={USER_MENU_ITEMS[1].src}
          src={USER_MENU_ITEMS[1].src}
          path={USER_MENU_ITEMS[1].path}
        />
      </Badge>
    </div>
  );
};
