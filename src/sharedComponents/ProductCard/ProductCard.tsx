import { FunctionComponent } from 'react';
import { useStyle } from './styles';

export const ProductCard: FunctionComponent = () => {
  const cart = require('assets/icons/shopping-cart.svg').default;
  const classes = useStyle();

  return (
    <div className={classes.productCard}>
      <a className={classes.productCardUnit} href="#">
        <div className={classes.media}>
          <img src="src" alt="chair" className={classes.productCardImg} />
        </div>
        <div className={classes.productCardBlock}>
          <div className={classes.productCardInfo}>
            <p className={classes.productCardName}>rwtywty</p>
            <p className={classes.productCardDescripion}>rwtywrtyrwtywrtywrty yrwtywrt r wrtyw</p>
            <span className={classes.productCardPrice}></span>
          </div>
          <button className={classes.productCardCartButton}>
            <img src={cart} alt="cart" />
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
