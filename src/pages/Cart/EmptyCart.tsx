import { CLIENT_PATHS } from 'constants/constants';
import { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { useStyle } from './styles';

export const EmptyCart: FunctionComponent = () => {
  const classes = useStyle();
  return (
    <>
      <div className={classes.message}>Your shopping trolley is empty.</div>
      <div className={classes.login}>
        If you
        <NavLink to={CLIENT_PATHS.register}> log in </NavLink>
        log in the products you have added from other devices will show up here.
      </div>
      <div className={classes.browsing}>
        You can add products to your shoppingcart, either by searching or by
        <NavLink to="/catalog"> browsing products</NavLink>
      </div>
    </>
  );
};
