import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'sharedComponents/Button';
import { productCartSelector } from 'store/selectors/cart';
import { deleteAllProducts } from 'store/slices/cart';
import { useTranslation } from 'react-i18next';
import { ProductCartView } from './ProductCartView';
import { useStyle } from './styles';

export const ProductCartList: FunctionComponent = () => {
  const productList = useSelector(productCartSelector);
  const dispatch = useDispatch();
  const classes = useStyle();

  const { t } = useTranslation(['Сart']);

  const removeAllProducts = () => {
    dispatch(deleteAllProducts());
  };
  return (
    <div className={classes.productCartList}>
      {productList.length &&
        productList.map((productObjWithQuantity) => (
          <ProductCartView
            key={`${productObjWithQuantity.product.id}${productObjWithQuantity.product.image}`}
            product={productObjWithQuantity}
          />
        ))}
      <Button
        name={t('removeAllProducts')}
        className={classes.removeAllProducts}
        onClick={removeAllProducts}
      />
    </div>
  );
};
