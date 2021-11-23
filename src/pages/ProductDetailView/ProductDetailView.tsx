import { FunctionComponent } from 'react';

export const ProductDetailView: FunctionComponent = () => {
  const goToMainPage = (): void => {
    'dads';
  };

  return (
    <div>
      <img src="" alt="" />
      <div className="description" />
      <div className="info">
        <h1 className="productName" />
        <p>price</p>
        <div className="colorVars">
          <p>Color</p>
          <img src="" alt="" />
        </div>
      </div>
      <button className="add to cart" onClick={goToMainPage} />
    </div>
  );
};
