import { alpha } from '@mui/system';
import { pxToRem } from 'app/styles/theme/utils';

const MuiPaper = {
  styleOverrides: {
    root: {
      borderRadius: pxToRem(40),
      backgroundColor: '#282828',
      boxShadow: `${pxToRem(16)} ${pxToRem(16)} ${pxToRem(20)} rgba(0, 0, 0, 0.15), 
      -${pxToRem(8)} -${pxToRem(8)} ${pxToRem(20)} rgba(255, 255, 255, 0.05)`,
    },
  },
};

export default MuiPaper;
