import { FunctionComponent, SyntheticEvent, useState } from 'react';
import { IProductImage } from 'utils/interfaces/product';
import { ProductMainImg } from './ProductMainImg';
import { useStyle } from './styles';
import { ProductDescription } from './ProductDescription';
import { ProductColorVariants } from './ProductColorVariants';

interface IProductCard {
  id: string;
  name: string;
  description: string;
  images: IProductImage[];
  price: number;
}

export const ProductCard: FunctionComponent<IProductCard> = ({
  id,
  name,
  description,
  images,
  price,
}) => {
  const classes = useStyle();

  const [src, setSrc] = useState(images[0].baseUrl);

  const switchVariants = (url: string) => {
    setSrc(url);
  };

  const goToProductDetail = (id: string) => {
    console.log(id);
  };

  return (
    <li className={classes.productCard}>
      <a className={classes.productCardUnit} href="#" onClick={() => goToProductDetail(id)}>
        <ProductMainImg src={src} />
        <ProductDescription name={name} description={description} price={price} />
      </a>
      <ProductColorVariants images={images} switchVariants={switchVariants} />
    </li>
  );
};
