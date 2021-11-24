import { FunctionComponent } from 'react';

import { Button } from 'sharedComponents/Button';
import { LANGUAGE } from 'constants/constants';
import { useStyle } from './styles';

export const LanguageButtons: FunctionComponent = () => {
  const classes = useStyle();

  return (
    <div className={classes.localize}>
      {LANGUAGE.map((lang) => {
        return <Button key={lang} name={lang} className={classes.localizeButtons} />;
      })}
    </div>
  );
};
