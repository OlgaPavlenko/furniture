import { socialNetworkItems } from 'constants/constants';
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
        {Object.keys(socialNetworkItems).map((key) => {
          return <SocialLink key={key} href={socialNetworkItems[key as keyof ISocialLink]} />;
        })}
      </ul>
    </div>
  );
};
