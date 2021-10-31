import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  main: {
    display: 'flex',
    marginBottom: '25px',
  },

  catalog: {
    display: 'flex',
    margin: '0 25px',
    flexWrap: 'wrap',
    columnGap: '8%',
    rowGap: '15px',
  },
}));
