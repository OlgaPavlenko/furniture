import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { FunctionComponent } from 'react';
import { CLIENT_PATHS } from 'constants/constants';
import { IPrivateRouteProps } from 'store/utils/interfaces/auth';
import { userSelector } from 'store/selectors/auth';

export const PrivateRoute: FunctionComponent<IPrivateRouteProps> = ({ path, component }) => {
  const isLoggedIn = useSelector(userSelector);
  return isLoggedIn ? (
    <Route exact path={path} component={component} />
  ) : (
    <Redirect to={CLIENT_PATHS.register} />
  );
};
