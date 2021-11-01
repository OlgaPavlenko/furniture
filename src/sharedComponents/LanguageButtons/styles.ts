import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  localize: {
    display: 'flex',
  },

  localizeButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    minWidth: '30px',
  },
}));
