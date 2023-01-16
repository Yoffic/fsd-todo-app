import { SxStyles } from 'app/styles/theme';
import { pxToRem } from 'app/styles/theme/utils';

export const styles: SxStyles = {
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: pxToRem(16),
    padding: `${pxToRem(16)} ${pxToRem(26)} ${pxToRem(16)} ${pxToRem(16)}`,
  },
} as const;
