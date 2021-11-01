import { FunctionComponent, SyntheticEvent } from 'react';
import { useStyle } from './styles';

interface IProductCardImgs {
  url: string;
  baseUrl: string;
  switchVariants: any;
}

export const ProductCardImg: FunctionComponent<IProductCardImgs> = ({
  url,
  baseUrl,
  switchVariants,
}) => {
  const classes = useStyle();

  return (
    <a onClick={() => switchVariants(baseUrl)} className={classes.cardVariant}>
      <img src={url} alt="" className={classes.variantsCardImg} />
    </a>
  );
};
