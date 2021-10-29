import { FunctionComponent, SyntheticEvent } from 'react';
import { useStyle } from './styles';

interface IProductCardImgs {
  url: string;
  switchVariants: any;
}

export const ProductCardImgs: FunctionComponent<IProductCardImgs> = ({ url, switchVariants }) => {
  const classes = useStyle();

  return (
    <a onClick={() => switchVariants(url)} className={classes.cardVariant}>
      <img src={url} alt="" className={classes.variantsCardImg} />
    </a>
  );
};
