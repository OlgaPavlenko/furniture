import { ChangeEvent, FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { QUANTITY_SELECT } from 'constants/constants';
import { useDispatch } from 'react-redux';
import { setQuantity } from 'store/slices/cart';
import { useTranslation } from 'react-i18next';

interface IProps {
  className: string;
  productId: string;
  image: string;
  defaultQuantity: number;
}

export const QuantitySelect: FunctionComponent<IProps> = ({
  className,
  productId,
  image,
  defaultQuantity,
}) => {
  const dispatch = useDispatch();

  const { t } = useTranslation(['Сart']);

  const getQuantity = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setQuantity({ quantity: Number(e.target.value), productId, image }));
  };
  return (
    <Box className={className}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          {t('quantity')}
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
