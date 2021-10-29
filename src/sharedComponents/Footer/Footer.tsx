import { FunctionComponent } from 'react';
import { useStyle } from './style';

import { FootersContacts } from 'sharedComponents/Footer/FooterContacts';
import { SocialLinks } from 'sharedComponents/SocialLinks';

export const Footer: FunctionComponent = () => {
  const classes = useStyle();

  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <FootersContacts />
        <SocialLinks />
      </div>
    </footer>
  );
};
