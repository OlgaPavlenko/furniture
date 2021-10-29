import { FunctionComponent } from 'react';
import { IProductImage } from 'utils/interfaces/productInterface/image.interface';
import { ProductCardImgs } from './ProductCardImgs';
import { useStyle } from './styles';

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
  const cart = require('assets/icons/shopping-cart.svg').default;
  const classes = useStyle();
  return (
    <li className={classes.productCard}>
      <a className={classes.productCardUnit} href="#">
        <div className={classes.media}>
          <img src={images[0].baseUrl} alt="chair" className={classes.productCardImg} />
        </div>
        <div className={classes.productCardBlock}>
          <div className={classes.productCardInfo}>
            <p className={classes.productCardName}>{name}</p>
            <p className={classes.productCardDescripion}>{description}</p>
            <span className={classes.productCardPrice}>{price} uah</span>
          </div>
          <button className={classes.productCardCartButton}>
            <img src={cart} alt="cart" />
          </button>
        </div>
      </a>
      <div>
        <p className={classes.productCardVariantsLabel}>More variants</p>
        <div className={classes.cardVariantContainer}>
          {images.map((image) => (
            <ProductCardImgs key={image.color} url={image.url} />
          ))}
        </div>
      </div>
    </li>
  );
};
