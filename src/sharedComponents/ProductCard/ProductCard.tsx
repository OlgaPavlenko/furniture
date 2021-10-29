import { FunctionComponent, SyntheticEvent, useState } from 'react';
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

  const [src, setSrs] = useState(images[0].baseUrl);

  const switchVariants = (url: string) => {
    setSrs(url);
  };

  return (
    <li className={classes.productCard}>
      <a className={classes.productCardUnit} href="#">
        <div className={classes.media}>
          <img src={src} alt="chair" className={classes.productCardImg} />
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
            <ProductCardImgs key={image.color} url={image.url} switchVariants={switchVariants} />
          ))}
        </div>
      </div>
    </li>
  );
};
