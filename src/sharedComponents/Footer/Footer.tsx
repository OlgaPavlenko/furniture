import { FunctionComponent } from 'react';

import { FootersContacts } from 'sharedComponents/Footer/FooterContacts';
import { SocialLinks } from 'sharedComponents/SocialLinks';
import { useStyle } from './style';

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
