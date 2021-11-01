import { DOMAttributes, FunctionComponent, SyntheticEvent } from 'react';

interface ILinkProps extends DOMAttributes<HTMLElement> {
  text?: string;
  src?: string;
  href?: string;
  alt?: string;
  className?: string;
  linkClassName?: string;
  onClick?: (event: SyntheticEvent) => void;
  shouldConcatHref?: boolean;
}

export const ListLink: FunctionComponent<ILinkProps> = ({
  text,
  src,
  href,
  className,
  linkClassName,
  alt,
  shouldConcatHref,
}) => {
  return (
    <li className={className}>
      <a href={shouldConcatHref ? `${href}${text}` : href} className={linkClassName}>
        {src ? <img src={src} alt={alt} /> : text}
      </a>
    </li>
  );
};
