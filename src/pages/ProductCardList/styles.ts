import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    margin: '25px 0px',
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
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '0 20px 15px 0',
  },

  // list: {
  //   width: "30px,",
  // },

  // menu: {
  //   width: "30px,",
  // },
}));
