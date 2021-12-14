import { FunctionComponent, SyntheticEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from 'sharedComponents/Button';
import { ProductColorVariants } from 'sharedComponents/ProductCard/ProductColorVariants';
import { ProductDescription } from 'sharedComponents/ProductCard/ProductDescription';
import { ProductMainImg } from 'sharedComponents/ProductCard/ProductMainImg';
import { currentProductSelector } from 'store/selectors/product';
import { addProduct } from 'store/slices/cart';
import { IProductImage } from 'utils/interfaces/product';
import { useTranslation } from 'react-i18next';
import { useStyle } from './styles';

export const ProductDetailView: FunctionComponent = () => {
  const classes = useStyle();
  const history = useHistory();
  const cart = require('assets/icons/shopping-cart.svg').default;
  const product = useSelector(currentProductSelector);
  const dispatch = useDispatch();
  const [src, setSrc] = useState(product.images[0].baseUrl);
  const [srcId, setSrcId] = useState(product.images[0].id);

  const { t } = useTranslation(['ProductButton']);

  const goToMainPage = (event: SyntheticEvent): void => {
    event.preventDefault();
    history.push('/catalog');
  };

  const getPrice = (): number | undefined => {
    const price = product.images.find((image: IProductImage) => image.id === srcId);
    return price?.price;
  };

  const getImage = (): string | undefined => {
    const currentImage = product.images.find((image: IProductImage) => image.id === srcId);
    return currentImage?.baseUrl;
  };

  useEffect(() => {
    setSrc(product.images[0].baseUrl);
    setSrcId(product.images[0].id);
  }, [product]);

  const switchVariants = (id: string) => {
    const productImage = product.images.find((image: IProductImage) => image.id === id);
    if (productImage?.baseUrl) {
      setSrc(productImage.baseUrl);
    }
    setSrcId(id);
  };

  const addToCart = (
    id: string,
    image: string | undefined,
    price: number | undefined,
    name: string,
    description: string,
  ) => {
    dispatch(addProduct({ id, name, image, price, description }));
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
          {t('go back')}
        </button>
      </div>
    </div>
  );
};
