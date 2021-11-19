import { FunctionComponent } from 'react';
// import { useHistory } from 'react-router-dom';

interface IProductDetailView {}

export const ProductDetailView: FunctionComponent = () => {
  // const history = useHistory();

  const goToMainPage = (): void => {
    //   navigate.push(CLIENT_PATHS.main);
  };

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
      <button className="add to cart" onClick={goToMainPage}></button>
    </div>
  );
};
