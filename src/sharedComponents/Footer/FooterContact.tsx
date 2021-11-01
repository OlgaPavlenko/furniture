import { FunctionComponent } from 'react';
import { useStyle } from './style';

interface IFooterContact {
  href: string;
  descr: string;
}

export const FooterContact: FunctionComponent<IFooterContact> = ({ descr, href }) => {
  const classes = useStyle();

  return (
    <li className={classes.footerContactItem}>
      <a href={`${href}${descr}`} className={classes.footerColor}>
        {descr}
      </a>
    </li>
  );
};
