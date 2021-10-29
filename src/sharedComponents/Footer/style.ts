import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  footer: {
    backgroundColor: '#15166d',
  },

  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: '19px',
    paddingTop: '19px',
    fontSize: '14px',
  },
}));
