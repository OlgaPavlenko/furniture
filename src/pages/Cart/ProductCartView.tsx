import { FunctionComponent, useEffect, useState } from 'react';
import { ProductColorVariants } from 'sharedComponents/ProductCard/ProductColorVariants';
import { ProductDescription } from 'sharedComponents/ProductCard/ProductDescription';
import { ProductMainImg } from 'sharedComponents/ProductCard/ProductMainImg';
import { Button } from 'sharedComponents/Button';
import { IProduct } from 'store/utils/interfaces/product';
import { deleteProduct, IProps } from 'store/slices/cart';
import { useDispatch, useSelector } from 'react-redux';
import { productCartSelector } from 'store/selectors/cart';
import { QuantitySelect } from './QuantitySelect';
import { useStyle } from './styles';

interface IProductCartView {
  product: IProps;
}

export const ProductCartView: FunctionComponent<IProductCartView> = ({ product }) => {
  const classes = useStyle();
  const bin = require('assets/icons/bin.svg').default as string;
  const dispatch = useDispatch();
  const [src, setSrc] = useState(product.product.images[0].baseUrl);
  const quantity = useSelector(productCartSelector);

  useEffect(() => {
    setSrc(product.product.images[0].baseUrl);
  }, [product]);

  const switchVariants = (url: string) => {
    setSrc(url);
  };

  const deleteCurrentProduct = (id: string) => {
    dispatch(deleteProduct(id));
  };

  const getPrice = (): number => {
    return product.quantity * product.product.price;
  };

  useEffect(() => {
    getPrice();
  }, [quantity]);

  return (
    <div className={classes.wraper}>
      <div className={classes.selectBox}>
        <div className={classes.leftBar}>
          <QuantitySelect className={classes.select} productId={product.product.id} />
          <Button badgeSrc={bin} onClick={() => deleteCurrentProduct(product.product.id)} />
        </div>
      </div>
      <div className={classes.product}>
        <ProductMainImg src={src} className={classes.image} />
        <div className={classes.productView}>
          <h1 className={classes.productName}>{product.product.name}</h1>
          <ProductColorVariants images={product.product.images} switchVariants={switchVariants} />
          <ProductDescription
            name={product.product.name}
            description={product.product.description}
            price={getPrice()}
            className={classes.description}
          />
        </div>
      </div>
    </div>
  );
};
