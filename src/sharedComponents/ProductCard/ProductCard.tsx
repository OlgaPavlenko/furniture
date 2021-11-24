import { FunctionComponent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { IProductImage } from 'utils/interfaces/product';
import { getProductByIdAsync } from 'store/slices/product';
import { ProductMainImg } from './ProductMainImg';
import { ProductDescription } from './ProductDescription';
import { ProductColorVariants } from './ProductColorVariants';
import { useStyle } from './styles';
interface IProductCard {
  productId: string;
  name: string;
  description: string;
  images: IProductImage[];
  price: number;
}

export const ProductCard: FunctionComponent<IProductCard> = ({
  productId,
  name,
  description,
  images,
  price,
}) => {
  const classes = useStyle();

  const [src, setSrc] = useState(images[0].baseUrl);
  const dispatch = useDispatch();

  const switchVariants = (url: string) => {
    setSrc(url);
  };

  const getProductById = (id: string) => {
    dispatch(getProductByIdAsync(id));
  };

  return (
    <li className={classes.productCard}>
      <a className={classes.productCardUnit} href="#" onClick={() => getProductById(productId)}>
        <ProductMainImg src={src} />
        <ProductDescription name={name} description={description} price={price} />
      </a>
      <ProductColorVariants images={images} switchVariants={switchVariants} />
    </li>
  );
};
