import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  wraper: {
    width: '65%',
    display: 'flex',
    justifyContent: 'space-between',
  },

  productName: {
    fontWeight: 'bold',
    marginBottom: '15px',
  },

  productView: {
    minWidth: '450px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'start',
    alignSelf: 'flex-start',
    padding: '65px 25px 25px 25px',
  },

  image: {
    width: '450px',
    margin: ' 25px 25px 25px 15px',
  },

  description: {
    marginBottom: '15px',
  },

  backButton: {
    minHeight: '25px',
    border: '1px solid #15166d',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#15166d',
  },
}));
