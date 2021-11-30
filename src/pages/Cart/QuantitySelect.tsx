import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { QUANTITY_SELECT } from 'constants/constants';

interface IProps {
  className: string;
}

export const QuantitySelect: FunctionComponent<IProps> = ({ className }) => {
  return (
    <Box className={className}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Quantity
        </InputLabel>
        <NativeSelect
          defaultValue={1}
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
