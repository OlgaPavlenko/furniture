import { FunctionComponent } from 'react';
import { useStyle } from './styles';

interface IProductMainImg {
  src: string;
  className: string;
}

export const ProductMainImg: FunctionComponent<IProductMainImg> = ({ src, className }) => {
  const classes = useStyle();

  return (
    <div className={classes.media}>
      <img src={src} alt="chair" className={className} />
    </div>
  );
};
