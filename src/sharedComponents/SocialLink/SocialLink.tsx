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
          <svg className={classes.iconNetwork}>
            <use href={href}></use>
          </svg>
        </div>
      </a>
    </li>
  );
};
