import { CONTACT_ITEMS } from 'constants/constants';
import { FunctionComponent } from 'react';
import { FooterContact } from 'sharedComponents/Footer/FooterContact';
import { useStyle } from './style';

export const FootersContacts: FunctionComponent = () => {
  const classes = useStyle();
  return (
    <ul className={classes.footerContact}>
      {CONTACT_ITEMS.map((item) => {
        return <FooterContact key={item.href} descr={item.descr} href={item.href} />;
      })}
    </ul>
  );
};
