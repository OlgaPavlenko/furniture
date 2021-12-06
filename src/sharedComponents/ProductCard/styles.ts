import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  productCard: {
    minWidth: '400px',
    maxWidth: '400px',
    textAlign: 'right',
  },

  productCardImg: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },

  productCardName: {
    fontWeight: 700,
    textTransform: 'uppercase',
    lineHeight: 1.5,
    fontSize: '0.75rem',
  },

  productCardBlock: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  productCardCartButton: {
    border: '1px solid #15166d',
    borderRadius: '50%',
    minWidth: '35px',
    height: '35px',

    '&:hover': {
      backgroundColor: 'rgb(233, 230, 230)',
    },
  },

  disabled: {
    opacity: 0.5,
    cursor: 'not-allowed',
    pointerEvents: 'none',
  },

  productCardInfo: {
    paddingBottom: '20px',
  },

  productCardPrice: {
    paddingRight: '5px',
    display: 'inline-block',
    fontWeight: 700,
    fontSize: '1rem',
  },

  productCardVariantsLabel: {
    paddingBottom: '10px',
  },

  productCardUnit: {
    color: 'black',
  },

  list: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '30px',
  },

  media: {
    width: '100%',
    height: 0,
    paddingBottom: '56.25%' /* 16:9 */,
    position: 'relative',
  },

  listInfo: {
    minWidth: '150px',
  },

  cardVariantContainer: {
    display: 'flex',
    minHeight: '40px',
    marginBottom: '15px',
  },

  variantsCardImg: {
    width: '100%',
    height: '100%',
    padding: '3px 5px',
  },

  cardVariant: {
    display: 'block',
    width: '80px',

    '&:hover': {
      border: '1px solid black',
    },
  },
}));
