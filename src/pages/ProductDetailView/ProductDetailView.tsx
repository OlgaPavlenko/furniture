import { FunctionComponent } from 'react';

interface IProductDetailView {}

export const ProductDetailView: FunctionComponent = () => {
  // const classes = useStyle();

  return (
    <div>
      <img src="" alt="" />
      <div className="description"></div>
      <div className="info">
        <h1 className="productName"></h1>
        <p>price</p>
        <div className="colorVars">
          <p>Color</p>
          <img src="" alt="" />
        </div>
      </div>
      <button className="add to cart"></button>
    </div>
  );
};
