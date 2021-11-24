import { AboutUs } from 'pages/AboutUs/AboutUs';
import { Cart } from 'pages/Cart/Cart';
import { Delivery } from 'pages/Delivery/Delivery';
import { ProductCardList } from 'pages/ProductCardList';
import { ProductDetailView } from 'pages/ProductDetailView/ProductDetailView';
import { FunctionComponent } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

export const Routing: FunctionComponent = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/catalog" />
      <Route exact path="/catalog" component={ProductCardList} />
      <Route path="/catalog/:id" component={ProductDetailView} />
      <Route path="/aboutUs" component={AboutUs} />
      <Route path="/delivery" component={Delivery} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
};
