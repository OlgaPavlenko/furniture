import { CLIENT_PATHS } from 'constants/constants';
import { AboutUs } from 'pages/AboutUs/AboutUs';
import { Cart } from 'pages/Cart';
import { Delivery } from 'pages/Delivery/Delivery';
import { ProductCardList } from 'pages/ProductCardList';
import { ProductDetailView } from 'pages/ProductDetailView/ProductDetailView';
import { RegisterForm } from 'pages/RegisterForm';
import { FunctionComponent } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';

export const Routes: FunctionComponent = () => {
  return (
    <Switch>
      <Redirect exact from={`${CLIENT_PATHS.main}`} to={`${CLIENT_PATHS.catalog}`} />
      <Route path={`${CLIENT_PATHS.register}`} component={RegisterForm} />
      <PrivateRoute exact path={`${CLIENT_PATHS.catalog}`} component={ProductCardList} />
      <PrivateRoute exact path={`${CLIENT_PATHS.catalog}/:id`} component={ProductDetailView} />
      <PrivateRoute path={`${CLIENT_PATHS.aboutUs}`} component={AboutUs} />
      <PrivateRoute path={`${CLIENT_PATHS.delivery}`} component={Delivery} />
      <PrivateRoute path={`${CLIENT_PATHS.cart}`} component={Cart} />
    </Switch>
  );
};
