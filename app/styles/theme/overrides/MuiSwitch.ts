import { pxToRem } from 'app/styles/theme/utils';

const MuiSwitch = {
  styleOverrides: {
    root: {
      width: pxToRem(51),
      height: pxToRem(30),
      padding: 0,
      display: 'flex',
      overflow: 'visible',
      '&:active': {
        thumb: {
          width: pxToRem(26),
        },
        switchBase: {
          '&.Mui-checked': {
            transform: `translateX(${pxToRem(21)})`,
          },
        },
      },
    },
    switchBase: {
      padding: pxToRem(2),
      '&:hover': {
        backgroundColor: 'transparent',
      },
      '&.Mui-checked': {
        transform: `translateX(${pxToRem(21)})`,
        '+.MuiSwitch-track': {
          opacity: 1,
          backgroundColor: '#10C200',
          border: 'none',
        },
        '.MuiSwitch-thumb': {
          background: '#ffffff',
        },
      },
    },
    thumb: {
      boxShadow: 'none',
      background: 'common.white',
      width: pxToRem(26),
      height: pxToRem(26),
      borderRadius: pxToRem(20),
    },
    track: {
      boxSizing: 'border-box',
      borderRadius: pxToRem(20),
      opacity: 1,
      backgroundColor: '#366EFF',
    },
  },
  defaultProps: {},
};

export default MuiSwitch;
