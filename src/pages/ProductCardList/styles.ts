import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  wrap: {
    width: '100%',
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
    marginRight: '52px',
    marginTop: '15px',
    marginBottom: '15px',
    alignSelf: 'flex-end',
  },

  content: {
    display: 'flex',
  },
}));
