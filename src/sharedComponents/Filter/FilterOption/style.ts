import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  // accordion: {
  //   backgroundColor: '#eee',
  //   color: '#444',
  //   cursor: 'pointer',
  //   padding: '18px',
  //   width: '100%',
  //   textAlign: 'left',
  //   border: 'none',
  //   outline: 'none',
  //   transition: '0.4s',

  //   '&:hover': {
  //     backgroundColor: ' #ccc',
  //   },
  // },
  panel: {
    padding: '0 18px',
    backgroundColor: 'white',
    display: 'block',
    overflow: 'hidden',
    marginTop: '7px',
  },
  checkbox: {
    margin: '3px 0 5px 0',
  },
  /* для элемента input c type="checkbox" */
  'customCheckbox > input': {
    position: 'absolute',
    zIndex: -1,
    opacity: 0,

    /* стили при наведении курсора на checkbox */
    '&::not(:disabled):not(:checked) + span:hover::before': {
      borderColor: '#b3d7ff',
    },

    /* стили для активного чекбокса (при нажатии на него) */
    ' &:not(:disabled):active + span::before': {
      backgroundColor: '#b3d7ff',
      borderColor: '#b3d7ff',
    },

    /* стили для чекбокса, находящегося в фокусе */
    '&:focus + span::before': {
      boxShadow: '0 0 0 0.2rem rgba(0, 123, 255, 0.25)',
    },

    /* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */
    '&:focus:not(:checked) + span::before': {
      borderColor: ' #80bdff',
    },

    /* стили для чекбокса, находящегося в состоянии checked */
    '&:checked + span::before': {
      borderColor: '#0b76ef',
      backgroundColor: '#0b76ef',
      backgroundImage: "url('/assets/icons/checked.svg')",
    },
  },

  /* для элемента label, связанного с .custom-checkbox */
  'custom-checkbox > span': {
    display: 'inline-flex',
    alignItems: 'center',
    userSelect: 'none',

    /* создание в label псевдоэлемента before со следующими стилями */
    '&::before': {
      content: '',
      display: 'inline-block',
      width: '1em',
      height: '1em',
      flexShrink: 0,
      flexGrow: 0,
      border: '1px solid #adb5bd',
      borderRadius: '0.25em',
      marginRight: '0.5em',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: '50% 50%',
    },
  },
}));
