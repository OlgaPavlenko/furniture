import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  footer: {
    backgroundColor: '#15166d',
    flexShrink: 0,
  },

  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: '19px',
    paddingTop: '19px',
    fontSize: '14px',
  },
  footerContact: {
    lineHeight: 1.71,
  },
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
