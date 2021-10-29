import { contactItems } from 'constants/constants';
import { FunctionComponent } from 'react';
import { FooterContact } from 'sharedComponents/Footer/FooterContact';
import { useStyle } from './styles';

interface IFooterContacts {
  mail: string;
  phone: string;
}
export const FootersContacts: FunctionComponent = () => {
  const classes = useStyle();
  return (
    <ul className={classes.footerContact}>
      {contactItems.map((item) => {
        return <FooterContact key={item.href} descr={item.descr} href={item.href} />;
      })}
    </ul>
  );
};
