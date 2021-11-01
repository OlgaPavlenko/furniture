import { FunctionComponent } from 'react';
<<<<<<< HEAD:src/sharedComponents/Footer/FooterContact/FooterContact.tsx
import { ListLink } from 'sharedComponents/ListLink';
import { useStyle } from './styles';
=======
import { useStyle } from './style';
>>>>>>> a2bac77b3d88b153998e591c18e8fb8a6f9a7e67:src/sharedComponents/Footer/FooterContact.tsx

interface IFooterContact {
  href: string;
  descr: string;
}

export const FooterContact: FunctionComponent<IFooterContact> = ({ descr, href }) => {
  const classes = useStyle();

  return (
    <ListLink
      className={classes.footerContactItem}
      linkClassName={classes.footerColor}
      text={descr}
      href={href}
    />
  );
};
