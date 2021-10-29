import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  socialLink: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgb(233, 230, 230)',
    borderRadius: '50%',
    width: '44px',
    height: '44px',

    '&:hover': {
      backgroundColor: 'rgb(89, 0, 255)',
    },
  },

  iconNetwork: {
    fill: 'inherit',
    width: '20px',
    height: '20px',
  },
}));
