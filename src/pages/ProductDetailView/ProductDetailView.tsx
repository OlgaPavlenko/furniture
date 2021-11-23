import { FunctionComponent, SyntheticEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ProductColorVariants } from 'sharedComponents/ProductCard/ProductColorVariants';
import { ProductDescription } from 'sharedComponents/ProductCard/ProductDescription';
import { ProductMainImg } from 'sharedComponents/ProductCard/ProductMainImg';

import { currentProductSelector } from 'store/selectors/product';

export const ProductDetailView: FunctionComponent = () => {
  const history = useHistory();
  const product = useSelector(currentProductSelector);
  const goToMainPage = (event: SyntheticEvent): void => {
    event.preventDefault();

    history.push('/catalog');
  };

  const [src, setSrc] = useState(product.images[0].baseUrl);
  const switchVariants = (url: string): void => {
    setSrc(url);
  };

  return (
    <div>
      <ProductMainImg src={src || product.images[0].baseUrl} />
      <ProductDescription
        name={product.name}
        description={product.description}
        price={product.price}
      />
      <ProductColorVariants images={product.images} switchVariants={switchVariants} />
      <button className="add to cart" onClick={goToMainPage}>
        Go Back
      </button>
    </div>
  );
};
