import { SxStyles } from 'app/styles/theme';
import { pxToRem } from 'app/styles/theme/utils';

export const styles: SxStyles = {
  wrapper: {
    width: pxToRem(314),
    marginBottom: pxToRem(16),
  },
  heading: {
    marginBottom: 0,
  },
  menu: {
    width: pxToRem(150),
    padding: pxToRem(16),
  },
} as const;
