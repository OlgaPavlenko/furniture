import { FunctionComponent, useEffect, useState } from 'react';
import { ProductColorVariants } from 'sharedComponents/ProductCard/ProductColorVariants';
import { ProductDescription } from 'sharedComponents/ProductCard/ProductDescription';
import { ProductMainImg } from 'sharedComponents/ProductCard/ProductMainImg';
import { Button } from 'sharedComponents/Button';
import { IProduct } from 'store/utils/interfaces/product';
import { deleteProduct } from 'store/slices/cart';
import { useDispatch } from 'react-redux';
import { QuantitySelect } from './QuantitySelect';
import { useStyle } from './styles';

interface IProps {
  product: IProduct;
}

export const ProductCartView: FunctionComponent<IProps> = ({ product }) => {
  const classes = useStyle();
  const bin = require('assets/icons/bin.svg').default as string;
  const dispatch = useDispatch();
  const [src, setSrc] = useState(product.images[0].baseUrl);

  useEffect(() => {
    setSrc(product.images[0].baseUrl);
  }, [product]);

  const switchVariants = (url: string) => {
    setSrc(url);
  };

  const deleteCurrentProduct = (id: string) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className={classes.wraper}>
      <div className={classes.selectBox}>
        <div className={classes.leftBar}>
          <QuantitySelect className={classes.select} />
          <Button badgeSrc={bin} onClick={() => deleteCurrentProduct(product.id)} />
        </div>
      </div>
      <div className={classes.product}>
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
    </div>
  );
};
