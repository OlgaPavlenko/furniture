import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  filter: {
    marginLeft: '20px',
    minWidth: '300px',
    border: '1px solid #15166d',
  },

  accordion: {
    backgroundColor: '#eee',
    color: '#444',
    cursor: 'pointer',
    padding: '18px',
    width: '100%',
    textAlign: 'left',
    border: 'none',
    outline: 'none',
    transition: '0.4s',

    '&:hover': {
      backgroundColor: ' #ccc',
    },
  },
}));
