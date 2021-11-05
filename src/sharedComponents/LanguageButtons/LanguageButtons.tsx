import { FunctionComponent } from 'react';
import { useStyle } from './styles';

import { Button } from 'sharedComponents/Button';
import { LANGUAGE } from 'constants/constants';

export const LanguageButtons: FunctionComponent = () => {
  const classes = useStyle();

  return (
    <div className={classes.localize}>
      {LANGUAGE.map((LANGUAGE) => {
        return (
          <Button
            key={LANGUAGE}
            name={LANGUAGE}
            onClick={() => console.log('eeeeeeeeeeee!')}
            className={classes.localizeButtons}
          />
        );
      })}
    </div>
  );
};
