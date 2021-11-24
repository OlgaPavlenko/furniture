import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  navigationItem: {
    fontWeight: 700,
  },

  navigationItemLink: {
    color: '#15166d',

    '&:hover': {
      color: '#111',
      textDecoration: 'underline',
    },
  },
}));
