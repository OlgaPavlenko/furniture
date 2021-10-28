import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  footerColor: {
    color: 'rgb(212, 211, 211)',
  },

  footerSocials: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '20px',
  },

  footerSocialsLabel: {
    fontWeight: 700,
    lineHeight: '1.14',
    letterSpacing: '0.03em',
    color: '#ffffff',
    textTransform: 'uppercase',
  },

  socialLinks: {
    display: 'inherit',
    columnGap: '15px',
  },
}));
