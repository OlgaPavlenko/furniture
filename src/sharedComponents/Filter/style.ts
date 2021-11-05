import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  filter: {
    height: '100%',
    marginLeft: '20px',
    minWidth: '300px',
    border: '1px solid #15166d',
  },

  price: {
    margin: '15px 15px',
    display: 'flex',
    justifyContent: 'space-around',
  },

  priceInput: {
    maxWidth: '130px',
    border: '1px solid #15166d',
  },

  clearButton: {
    minWidth: '100px',
    minHeight: '30px',
    margin: '15px 15px',
    border: '1px solid #15166d',
  },
}));
