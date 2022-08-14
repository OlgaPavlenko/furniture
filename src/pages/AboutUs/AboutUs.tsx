import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

export const AboutUs: FunctionComponent = () => {
  const { t } = useTranslation(['AboutUs']);

  return <div>{t('AboutUs')}</div>;
};
