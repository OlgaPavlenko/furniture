import { DOMAttributes, FunctionComponent, SyntheticEvent } from 'react';

interface ILinkProps extends DOMAttributes<HTMLElement> {
  text?: string;
  src?: string;
  href?: string;
  alt?: string;
  className?: string;
  linkClassName?: string;
  onClick?: (event: SyntheticEvent) => void;
}

export const ListLink: FunctionComponent<ILinkProps> = ({
  text,
  src,
  href,
  className,
  linkClassName,
  alt,
}) => {
  return (
    <li className={className}>
      <a href={`${href}${text}`} className={linkClassName}>
        {src ? <img src={src} alt={alt} /> : text}
      </a>
    </li>
  );
};
