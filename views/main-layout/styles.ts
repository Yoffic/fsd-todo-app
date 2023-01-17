import { SxStyles } from 'app/styles/theme';
import { pxToRem } from 'app/styles/theme/utils';

export const styles: SxStyles = {
  layout: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxHeight: '100vh',
    width: pxToRem(390),
    margin: `${pxToRem(16)} auto`,
    paddingLeft: pxToRem(20),
    paddingRight: pxToRem(20),
    paddingTop: pxToRem(13),
    backgroundColor: '#222222',
    borderRadius: pxToRem(30),
  },
} as const;
