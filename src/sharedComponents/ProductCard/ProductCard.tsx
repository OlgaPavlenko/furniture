import { FunctionComponent } from 'react';
import { useStyle } from './styles';

export const ProductCard: FunctionComponent = () => {
  const logo = require('assets/icons/logo.svg').default as string;

  const classes = useStyle();

  return (
    <div className={classes.productCard}>
      <a className={classes.productCardUnit} href="#">
        <div className={classes.media}>
          <img src="src" alt="chair" className={classes.productCardImg} />
        </div>
        <div className={classes.productCardBlock}>
          <div className={classes.productCardInfo}>
            <p className={classes.productCardName}></p>
            <p className={classes.productCardDescripion}></p>
            <span className={classes.productCardPrice}></span>
          </div>
          <button className={classes.productCardCartButton}>
            <img src="assets/icons/shopping-cart.svg" alt="cart" />
          </button>
        </div>
      </a>
      <div>
        <p className={classes.productCardVariantsLabel}>More variants</p>
        <div className={classes.cardVariantContainer}>
          <a className={classes.cardVariant}>
            <img src="image.url" alt="" className={classes.variantsCardImg} />
          </a>
        </div>
      </div>
    </div>
  );
};
