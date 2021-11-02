import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  main: {
    display: 'flex',
<<<<<<< HEAD
    marginBottom: '25px',
=======
    flexDirection: 'column',
    margin: '25px 0px',
    rowGap: '15px',
>>>>>>> ec7f514acfc22f8516341fe91395c28a900522a4
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
