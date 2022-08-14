import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

export const Delivery: FunctionComponent = () => {
  const { t } = useTranslation(['Delivery']);

  return <div>{t('delivery')}</div>;
};
