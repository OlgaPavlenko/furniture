import { ChangeEvent, FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { QUANTITY_SELECT } from 'constants/constants';
import { useDispatch } from 'react-redux';
import { setQuantity } from 'store/slices/cart';

interface IProps {
  className: string;
  productId: string;
  productVariant: string;
  defaultQuantity: number;
}

export const QuantitySelect: FunctionComponent<IProps> = ({
  className,
  productId,
  productVariant,
  defaultQuantity,
}) => {
  const dispatch = useDispatch();

  const getQuantity = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setQuantity({ quantity: Number(e.target.value), productId, productVariant }));
  };
  return (
    <Box className={className}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Quantity
        </InputLabel>
        <NativeSelect
          onChange={getQuantity}
          defaultValue={defaultQuantity}
          inputProps={{
            name: 'quantity',
            id: 'uncontrolled-native',
          }}
        >
          {QUANTITY_SELECT.map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Box>
  );
};
