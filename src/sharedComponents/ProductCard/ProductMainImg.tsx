import { FunctionComponent } from 'react';
import { useStyle } from './styles';

interface IProductMainImg {
  src: string;
}

export const ProductMainImg: FunctionComponent<IProductMainImg> = ({ src }) => {
  const classes = useStyle();

  return (
    <div className={classes.media}>
      <img src={src} alt="chair" className={classes.productCardImg} />
    </div>
  );
};
