import { makeStyles } from '@material-ui/core';
import logo from 'assets/icons/lock.svg';

export const useStyle = makeStyles(() => ({
  cart: {
    margin: '15px 350px 15px 350px',
    width: '100%',
    textAlign: 'left',
  },

  name: {
    fontSize: '25px',
    fontWeight: 'bold',
    margin: '20px 20px 20px 0px',
  },

  totalPrice: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  message: {
    fontWeight: 'bold',
    margin: '0px 0px 20px 0px',
  },

  login: {
    margin: '0px 0px 20px 0px',
  },

  browsing: {
    margin: '0px 0px 20px 0px',
  },

  info: {
    borderTop: '1px solid #ccc',
    borderBottom: '1px solid #ccc',
    marginBottom: '20px',
  },

  paymentTypes: {
    margin: '25px 25px 15px 25px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  conditions: {
    margin: '30px 75px 15px 75px',
    display: 'flex',
    justifyContent: 'space-around',
  },

  secure: {
    width: '12',
    '&::before': {
      content: `url(${logo})`,
    },
  },

  buyButton: {
    margin: '15px 0px 15px 0px',
    minWidth: '200px',
    minHeight: '45px',
    backgroundColor: '#15166D',
    color: 'white',
  },
  productCartList: {},
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
    width: '250px',
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

  removeAllProducts: {
    marginBottom: '15px',
  },

  selectBox: {
    display: 'flex',
  },

  select: {
    maxWidth: '50px',
  },
}));
