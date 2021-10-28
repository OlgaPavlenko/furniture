import { FunctionComponent } from 'react';
import { useStyle } from './style';

import { SocialLinks } from 'sharedComponents/socialLinks';
import { FootersContacts } from 'sharedComponents/FootersContacts';

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
