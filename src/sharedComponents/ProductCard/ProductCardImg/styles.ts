import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  variantsCardImg: {
    width: '100%',
    height: '100%',
    padding: '3px 5px',
  },

  cardVariant: {
    display: 'block',
    width: '80px',

    '&:hover': {
      border: '1px solid black',
    },
  },
}));
