import { FunctionComponent } from 'react';
import { ListLink } from 'sharedComponents/ListLink';
import { useStyle } from './styles';

interface ISocialLink {
  href: string;
  shouldConcatHref?: boolean;
}

export const SocialLink: FunctionComponent<ISocialLink> = ({ href }) => {
  const classes = useStyle();
  return <ListLink className={classes.socialLink} src={href} alt="social networks" />;
};
