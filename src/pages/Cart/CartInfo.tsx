import { FunctionComponent } from 'react';
import { useStyle } from './styles';

interface ICartImgs {
  object: { returnPolicy: string; delivery: string };
}

interface ICartSvgs {
  object: { visa: string; masterCard: string; amex: string; jcb: string; cash: string };
}

export const CartInfo: FunctionComponent<ICartImgs | ICartSvgs> = ({ object }) => {
  const classes = useStyle();
  return (
    <ul className={classes.conditions}>
      {Object.entries(object).map((img) => (
        <li key={img[0]}>
          <img src={img[1]} alt={img[0]} className="{className}" />
        </li>
      ))}
    </ul>
  );
};
