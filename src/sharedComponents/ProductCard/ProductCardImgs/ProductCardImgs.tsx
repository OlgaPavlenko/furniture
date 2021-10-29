import { FunctionComponent } from 'react';
import { useStyle } from './styles';

interface IProductCardImgs {
  url: string;
}

export const ProductCardImgs: FunctionComponent<IProductCardImgs> = ({ url }) => {
  const classes = useStyle();

  return (
    <a className={classes.cardVariant}>
      <img src={url} alt="" className={classes.variantsCardImg} />
    </a>
  );
};
