import { FunctionComponent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { getProductByIdAsync } from 'store/slices/product';
import { Button } from 'sharedComponents/Button';
import { addProduct, setIsInCart } from 'store/slices/cart';
import { productCartSelector } from 'store/selectors/cart';
import { IProductImage } from 'utils/interfaces/product';
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
  const cartProduct = useSelector(productCartSelector);

  const [src, setSrc] = useState(images[0].baseUrl);
  const [srcId, setSrcId] = useState(images[0].id);
  const isActive = false;

  const getPrice = (): number | undefined => {
    const currentImage = images.find((image) => image.id === srcId);
    return currentImage?.price;
  };

  const getImage = (): string | undefined => {
    const currentImage = images.find((image) => image.id === srcId);
    return currentImage?.baseUrl;
  };

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

  const setActiveProduct = (): boolean => {
    const currentProduct = cartProduct.find((product) =>
      product.product.id === productId && product.product.image === src ? product.isInCart : null,
    );
    return currentProduct?.isInCart as boolean;
  };

  const addToCart = (id: string, image: string | undefined, price: number | undefined) => {
    dispatch(addProduct({ id, name, image, price, description }));
    dispatch(setIsInCart({ isActive, id, image }));
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
        disabled={setActiveProduct()}
        badgeSrc={cart}
        className={
          setActiveProduct()
            ? classes.productCardCartButton + classes.disabled
            : classes.productCardCartButton
        }
        onClick={() => addToCart(productId, getImage(), getPrice())}
      />
      <ProductColorVariants images={images} switchVariants={switchVariants} />
    </li>
  );
};
