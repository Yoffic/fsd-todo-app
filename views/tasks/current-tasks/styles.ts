import { SxStyles } from '@app/styles/theme';
import { pxToRem } from '@app/styles/theme/utils';

export const styles: SxStyles = {
  wrapper: {
    width: pxToRem(350),
  },
  title: {
    paddingLeft: pxToRem(16),
  },
} as const;
