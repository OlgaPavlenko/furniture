import { FunctionComponent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IProductImage } from 'store/utils/interfaces/product';
import { NavLink } from 'react-router-dom';
import { getProductByIdAsync } from 'store/slices/product';
import { Button } from 'sharedComponents/Button';
import { addProduct } from 'store/slices/cart';
import { ProductMainImg } from './ProductMainImg';
import { ProductDescription } from './ProductDescription';
import { ProductColorVariants } from './ProductColorVariants';
import { useStyle } from './styles';

interface IProductCard {
  productId: string;
  name: string;
  description: string;
  images: IProductImage[];
}

export const ProductCard: FunctionComponent<IProductCard> = ({
  productId,
  name,
  description,
  images,
}) => {
  const classes = useStyle();
  const cart = require('assets/icons/shopping-cart.svg').default;
  const dispatch = useDispatch();
  // const productsInCart = useSelector(productCartSelector);

  const [src, setSrc] = useState(images[0].baseUrl);
  const [srcId, setSrcId] = useState(images[0].id);
  const [isActive, setIsActive] = useState(false);

  const getPrice = (): number | undefined => {
    const currentImage = images.find((image) => image.id === srcId);
    return currentImage?.price;
  };

  const getImage = (): string | undefined => {
    const currentImage = images.find((image) => image.id === srcId);
    return currentImage?.baseUrl;
  };

  const getIsInCart = (): boolean => {};

  const switchVariants = (id: string): void => {
    const productImage = images.find((image) => image.id === id);
    if (productImage?.baseUrl) {
      setSrc(productImage.baseUrl);
    }
    setSrcId(id);
  };

  const getProductById = (id: string) => {
    dispatch(getProductByIdAsync(id));
  };

  const addToCart = (id: string, image: string | undefined, price: number | undefined) => {
    dispatch(addProduct({ id, name, image, price, description }));
    setIsActive(!isActive);
  };

  return (
    <li className={classes.productCard}>
      <NavLink
        className={classes.productCardUnit}
        onClick={() => getProductById(productId)}
        to={`/catalog/${productId}`}
      >
        <ProductMainImg src={src} className={classes.productCardImg} />
        <ProductDescription name={name} description={description} price={getPrice()} />
      </NavLink>
      <Button
        disabled={isActive}
        badgeSrc={cart}
        className={classes.productCardCartButton}
        onClick={() => addToCart(productId, getImage(), getPrice())}
      />
      <ProductColorVariants images={images} switchVariants={switchVariants} />
    </li>
  );
};
