import { FunctionComponent } from 'react';
import { IProductImage } from 'utils/interfaces/product';
import { useTranslation } from 'react-i18next';
import { ProductCardVariantImg } from './ProductCardVariantImg';
import { useStyle } from './styles';

interface IProductMainImg {
  images: IProductImage[];
  switchVariants: (id: string) => void;
}

export const ProductColorVariants: FunctionComponent<IProductMainImg> = ({
  images,
  switchVariants,
}) => {
  const classes = useStyle();

  const { t } = useTranslation(['Variants']);

  return (
    <div>
      <p className={classes.productCardVariantsLabel}>{t('more variants')}</p>
      <div className={classes.cardVariantContainer}>
        {images.map((image) => (
          <ProductCardVariantImg
            key={image.color}
            url={image.url}
            baseUrl={image.baseUrl}
            switchVariants={() => switchVariants(image.id)}
          />
        ))}
      </div>
    </div>
  );
};
