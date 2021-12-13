import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { FunctionComponent } from 'react';
import { CLIENT_PATHS } from 'constants/constants';
import { userSelector } from 'store/selectors/auth';
import { IPrivateRouteProps } from 'utils/interfaces/auth';

export const PrivateRoute: FunctionComponent<IPrivateRouteProps> = ({ path, component }) => {
  const isLoggedIn = useSelector(userSelector);
  return isLoggedIn ? (
    <Route exact path={path} component={component} />
  ) : (
    <Redirect to={CLIENT_PATHS.register} />
  );
};
