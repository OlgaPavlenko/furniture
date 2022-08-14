import { FunctionComponent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { getProductByIdAsync } from 'store/slices/product';
import { Button } from 'sharedComponents/Button';
import { addProduct } from 'store/slices/cart';
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
  const [productVariantId, setProductVariantId] = useState(images[0].id);

  const getPrice = (): number => {
    const currentImage = images.find((image) => image.id === productVariantId);
    return currentImage?.price || images[0].price;
  };

  const getImage = (): string => {
    const currentImage = images.find((image) => image.id === productVariantId);
    return currentImage?.baseUrl || images[0].baseUrl;
  };

  const switchVariants = (id: string): void => {
    const productImage = images.find((image) => image.id === id);
    if (productImage?.baseUrl) {
      setSrc(productImage.baseUrl);
    }
    setProductVariantId(id);
  };

  const getProductById = (id: string) => {
    dispatch(getProductByIdAsync(id));
  };

  const setActiveProduct = (): boolean => {
    const currentProduct = cartProduct.find(
      (product) => product.product.id === productId && product.product.productVariant === src,
    );
    return currentProduct?.isInCart || false;
  };

  const addToCart = (id: string, productVariant: string, price: number) => {
    dispatch(addProduct({ id, productVariant, price, name, description }));
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
