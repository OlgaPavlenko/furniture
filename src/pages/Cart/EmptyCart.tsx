import { CLIENT_PATHS } from 'constants/constants';
import { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useStyle } from './styles';

export const EmptyCart: FunctionComponent = () => {
  const classes = useStyle();

  const { t } = useTranslation(['EmptyCart']);
  return (
    <>
      <div className={classes.message}>{t('shopping trolley')}</div>
      <div className={classes.login}>
        {t('if you')}
        <NavLink to={CLIENT_PATHS.register}> {t('log in')} </NavLink>
        {t('added products')}
      </div>
      <div className={classes.browsing}>
        {t('shoppingcart')}
        <NavLink to="/catalog"> {t('browsing')}</NavLink>
      </div>
    </>
  );
};
