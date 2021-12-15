import { FunctionComponent, SyntheticEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from 'sharedComponents/Button';
import { ProductColorVariants } from 'sharedComponents/ProductCard/ProductColorVariants';
import { ProductDescription } from 'sharedComponents/ProductCard/ProductDescription';
import { ProductMainImg } from 'sharedComponents/ProductCard/ProductMainImg';
import { currentProductSelector } from 'store/selectors/product';
import { addProduct } from 'store/slices/cart';
import { useStyle } from './styles';

export const ProductDetailView: FunctionComponent = () => {
  const classes = useStyle();
  const history = useHistory();
  const cart = require('assets/icons/shopping-cart.svg').default;
  const product = useSelector(currentProductSelector);
  const dispatch = useDispatch();
  const [src, setSrc] = useState(product.images[0].baseUrl);
  const [productVariantId, setProductVariantId] = useState(product.images[0].id);

  const goToMainPage = (event: SyntheticEvent): void => {
    event.preventDefault();
    history.push('/catalog');
  };

  const getPrice = (): number => {
    const currentImage = product.images.find((image) => image.id === productVariantId);
    return currentImage?.price || product.images[0].price;
  };

  const getImage = (): string => {
    const currentImage = product.images.find((image) => image.id === productVariantId);
    return currentImage?.baseUrl || product.images[0].baseUrl;
  };

  useEffect(() => {
    setSrc(product.images[0].baseUrl);
    setProductVariantId(product.images[0].id);
  }, [product]);

  const switchVariants = (id: string) => {
    const productImage = product.images.find((image) => image.id === id);
    if (productImage?.baseUrl) {
      setSrc(productImage.baseUrl);
    }
    setProductVariantId(id);
  };

  const addToCart = (
    id: string,
    productVariant: string,
    price: number,
    name: string,
    description: string,
  ) => {
    dispatch(addProduct({ id, productVariant, price, name, description }));
  };

  return (
    <div className={classes.wraper}>
      <ProductMainImg src={src} className={classes.image} />
      <div className={classes.productView}>
        <h1 className={classes.productName}>{product.name}</h1>
        <ProductColorVariants images={product.images} switchVariants={switchVariants} />
        <ProductDescription
          name={product.name}
          description={product.description}
          price={getPrice()}
          className={classes.description}
        />
        <Button
          badgeSrc={cart}
          className={classes.productCardCartButton}
          onClick={() =>
            addToCart(product.id, getImage(), getPrice(), product.name, product.description)
          }
        />
        <button className={classes.backButton} onClick={goToMainPage}>
          Go Back
        </button>
      </div>
    </div>
  );
};
