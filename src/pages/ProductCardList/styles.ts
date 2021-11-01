import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  main: {
    display: 'flex',

    margin: '25px 0px',
  },

  catalog: {
    display: 'flex',
    margin: '0 25px',
    flexWrap: 'wrap',
    columnGap: '8%',
    rowGap: '15px',
  },
}));
