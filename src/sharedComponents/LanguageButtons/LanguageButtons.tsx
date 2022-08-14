import { FunctionComponent } from 'react';

import { Button } from 'sharedComponents/Button';
import { LANGUAGE } from 'constants/constants';
import { useTranslation } from 'react-i18next';
import { useStyle } from './styles';

export const LanguageButtons: FunctionComponent = () => {
  const classes = useStyle();
  const { i18n } = useTranslation(['AppBar']);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className={classes.localize}>
      {LANGUAGE.map((lang) => {
        return (
          <Button
            key={lang}
            name={lang}
            className={classes.localizeButtons}
            onClick={() => changeLanguage(lang)}
          />
        );
      })}
    </div>
  );
};
