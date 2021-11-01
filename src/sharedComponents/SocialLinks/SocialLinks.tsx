import { SOCIAL_NETWORK_ITEMS } from 'constants/constants';
import { FunctionComponent } from 'react';
import { SocialLink } from 'sharedComponents/SocialLink';
import { useStyle } from './styles';

interface ISocialLink {
  instagram: string;
  twitter: string;
  facebook: string;
  linkedin: string;
}

export const SocialLinks: FunctionComponent = () => {
  const classes = useStyle();
  return (
    <div className={classes.footerSocials}>
      <ul className={classes.socialLinks}>
        {Object.keys(SOCIAL_NETWORK_ITEMS).map((key) => {
          return <SocialLink key={key} href={SOCIAL_NETWORK_ITEMS[key as keyof ISocialLink]} />;
        })}
      </ul>
    </div>
  );
};
