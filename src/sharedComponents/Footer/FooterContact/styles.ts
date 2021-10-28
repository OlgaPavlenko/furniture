import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  footerContactItem: {
    marginBottom: '10px',

    '&:firstChild .footerColor': {
      color: '#ffffff',
    },
  },

  footerColor: {
    color: 'rgb(212, 211, 211)',
  },
}));
