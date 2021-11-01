import { FunctionComponent } from 'react';
import { IProductImage } from 'utils/interfaces/product';
import { ProductCardVariantImg } from './ProductCardVariantImg';
import { useStyle } from './styles';

interface IProductMainImg {
  images: IProductImage[];
  switchVariants: any;
}

export const ProductColorVariants: FunctionComponent<IProductMainImg> = ({
  images,
  switchVariants,
}) => {
  const classes = useStyle();

  return (
    <div>
      <p className={classes.productCardVariantsLabel}>More variants</p>
      <div className={classes.cardVariantContainer}>
        {images.map((image) => (
          <ProductCardVariantImg
            key={image.color}
            url={image.url}
            baseUrl={image.baseUrl}
            switchVariants={() => switchVariants(image.baseUrl)}
          />
        ))}
      </div>
    </div>
  );
};
