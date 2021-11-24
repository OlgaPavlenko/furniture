import { FunctionComponent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { IProductImage } from 'utils/interfaces/product';
import { NavLink } from 'react-router-dom';
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
  const dispatch = useDispatch();

  const [src, setSrc] = useState(images[0].baseUrl);
  const switchVariants = (url: string) => {
    setSrc(url);
  };

  const getProductById = (id: string) => {
    dispatch(getProductByIdAsync(id));
  };

  return (
    <li className={classes.productCard}>
      <NavLink
        className={classes.productCardUnit}
        to={`/catalog/${productId}`}
        onClick={() => getProductById(productId)}
      >
        <ProductMainImg src={src} />
        <ProductDescription name={name} description={description} price={price} />
      </NavLink>
      <ProductColorVariants images={images} switchVariants={switchVariants} />
    </li>
  );
};
