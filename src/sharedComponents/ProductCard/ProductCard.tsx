import { FunctionComponent, useState } from 'react';
import { IProductImage } from 'utils/interfaces/productInterface/image.interface';
import { ProductMainImg } from './ProductMainImg';
import { useStyle } from './styles';
import { ProductDescription } from './ProductDescription';
import { ProductColorVariants } from './ProductColorVariants';

interface IProductCard {
  name: string;
  description: string;
  images: IProductImage[];
  price: number;
}

export const ProductCard: FunctionComponent<IProductCard> = ({
  name,
  description,
  images,
  price,
}) => {
  const classes = useStyle();

  const [src, setSrs] = useState(images[0].baseUrl);

  const switchVariants = (url: string) => {
    setSrs(url);
  };

  return (
    <li className={classes.productCard}>
      <a className={classes.productCardUnit} href="#">
        <ProductMainImg src={src} />
        <ProductDescription name={name} description={description} price={price} />
      </a>
      <ProductColorVariants images={images} switchVariants={switchVariants} />
    </li>
  );
};
