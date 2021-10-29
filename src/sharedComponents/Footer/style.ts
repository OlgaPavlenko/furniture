import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  footer: {
    backgroundColor: '#15166d',
    padding: '65px 25px 21px 25px',
  },

  container: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    paddingBottom: '19px',
    fontSize: '14px',
  },
}));
