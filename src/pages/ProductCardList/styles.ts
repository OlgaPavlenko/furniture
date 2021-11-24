import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  wrap: {
    display: 'flex',
    flexDirection: 'column',
  },

  main: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '15px',
  },

  catalog: {
    display: 'flex',
    margin: '0 25px',
    flexWrap: 'wrap',
    columnGap: '8%',
    rowGap: '15px',
  },

  catalogBlock: {
    display: 'block',
    margin: '0 25px',
    flexWrap: 'wrap',
    columnGap: '8%',
    rowGap: '15px',
  },

  viewToggler: {
    margin: '15px, 0, 15px, 0',
  },

  content: {
    display: 'flex',
  },
}));
