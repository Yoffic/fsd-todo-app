import { SxProps, Theme } from '@mui/system';
import { createTheme, Components } from '@mui/material';

import overrides from 'app/styles/theme/overrides';
import { pxToRem } from 'app/styles/theme/utils';

export type SxStyles = Record<string, SxProps<Theme>>;

const theme = createTheme({
  components: {
    ...(overrides as Components),
  },
  palette: {
    background: {
      default: '#222222',
    },
    text: {
      primary: '#F4F4F4',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Actor',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: pxToRem(36),
      lineHeight: pxToRem(43),
      marginBottom: pxToRem(32),
    },
    body1: {
      fontFamily: 'Abhaya Libre',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: pxToRem(14),
      lineHeight: pxToRem(17),
    },
    h2: {
      fontFamily: 'Abhaya Libre',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: pxToRem(24),
      lineHeight: pxToRem(28),
    },
  },
});

export default theme;
