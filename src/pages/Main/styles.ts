import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  main: {
    position: 'relative',
    display: 'flex',
    rowGap: '15px',
  },

  viewToggler: {
    position: 'absolute',
    right: '200px',
    top: '25px',
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '0 20px 15px 0',
  },
}));
