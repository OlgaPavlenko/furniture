import { FunctionComponent } from 'react';
import { useStyle } from './styles';

interface IProductCardImg {
  url: string;
  baseUrl: string;
  switchVariants: any;
}

export const ProductCardVariantImg: FunctionComponent<IProductCardImg> = ({
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
