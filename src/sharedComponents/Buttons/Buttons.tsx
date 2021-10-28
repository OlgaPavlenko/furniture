import { FunctionComponent } from 'react';
import { useStyle } from './styles';

import { Button } from 'sharedComponents/Button';
import { language } from 'constants/constants';

export const Buttons: FunctionComponent = () => {
  const classes = useStyle();

  return (
    <div className={classes.localize}>
      {language.map((language) => {
        return (
          <Button key={language} language={language} onClick={() => console.log('eeeeeeeeeeee!')} />
        );
      })}
    </div>
  );
};
