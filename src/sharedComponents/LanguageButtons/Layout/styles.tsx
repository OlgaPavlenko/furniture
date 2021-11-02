import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  layout: {
    width: '100%',
  },
  main: {
    display: 'flex',
    marginTop: '25px',
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
