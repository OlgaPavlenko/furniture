import { FunctionComponent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { IProductImage } from 'store/utils/interfaces/product';
import { NavLink } from 'react-router-dom';
import { getProductByIdAsync } from 'store/slices/product';
import { Button } from 'sharedComponents/Button';
import { addProductToCart } from 'store/slices/cart';
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
  const cart = require('assets/icons/shopping-cart.svg').default;
  const dispatch = useDispatch();

  const [src, setSrc] = useState(images[0].baseUrl);
  const switchVariants = (url: string) => {
    setSrc(url);
  };

  const getProductById = (id: string) => {
    dispatch(getProductByIdAsync(id));
  };

  const addToCart = (id: string) => {
    dispatch(addProductToCart(id));
  };

  return (
    <li className={classes.productCard}>
      <NavLink
        className={classes.productCardUnit}
        onClick={() => getProductById(productId)}
        to={`/catalog/${productId}`}
      >
        <ProductMainImg src={src} className={classes.productCardImg} />
        <ProductDescription name={name} description={description} price={price} />
      </NavLink>
      <Button
        badgeSrc={cart}
        className={classes.productCardCartButton}
        onClick={() => addToCart(productId)}
      />
      <ProductColorVariants images={images} switchVariants={switchVariants} />
    </li>
  );
};
