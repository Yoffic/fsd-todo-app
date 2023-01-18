import { SxStyles } from 'app/styles/theme';
import { pxToRem } from 'app/styles/theme/utils';

export const styles: SxStyles = {
  bottom: {
    paddingBottom: pxToRem(66),
  },
} as const;
