import { FunctionComponent } from 'react';
import { useStyle } from './styles';

import { Button } from 'sharedComponents/Button/Button';
import { language } from 'utils/enums/enums';

export const Buttons: FunctionComponent = () => {
  const classes = useStyle();

  return (
    <div className={classes.localize}>
      {Object.values(language).map((language) => {
        return <Button key={language} language={language} />;
      })}
    </div>
  );
};
