import { FunctionComponent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ProductColorVariants } from 'sharedComponents/ProductCard/ProductColorVariants';
import { ProductDescription } from 'sharedComponents/ProductCard/ProductDescription';
import { ProductMainImg } from 'sharedComponents/ProductCard/ProductMainImg';
import { currentProductSelector } from 'store/selectors/product';
import { useStyle } from './styles';

export const ProductCartView: FunctionComponent = () => {
  const classes = useStyle();
  const product = useSelector(currentProductSelector);
  const [src, setSrc] = useState(product.images[0].baseUrl);

  useEffect(() => {
    setSrc(product.images[0].baseUrl);
  }, [product]);

  const switchVariants = (url: string) => {
    setSrc(url);
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
          price={product.price}
          className={classes.description}
        />
      </div>
    </div>
  );
};
