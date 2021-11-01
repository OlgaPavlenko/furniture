import { FunctionComponent } from 'react';
import { ListLink } from 'sharedComponents/ListLink';
import { useStyle } from './style';

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
