import { FunctionComponent } from 'react';
import { useStyle } from './styles';

interface ISocialLink {
  href: string;
}

export const SocialLink: FunctionComponent<ISocialLink> = ({ href }) => {
  const classes = useStyle();
  return (
    <li className={classes.socialLink}>
      <a href="#">
        <div>
          <img src={href} alt="social networks" />
        </div>
      </a>
    </li>
  );
};
