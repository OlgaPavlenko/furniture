import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  wraper: {
    width: '100%',
    display: 'flex',
  },

  productView: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },

  image: {
    width: '450px',
    margin: ' 25px 25px 25px 15px',
  },

  backButton: {
    border: '1px solid #15166d',
  },
}));
