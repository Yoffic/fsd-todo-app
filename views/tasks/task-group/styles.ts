import { SxStyles } from 'app/styles/theme';
import { pxToRem } from 'app/styles/theme/utils';

export const styles: SxStyles = {
  group: {
    width: pxToRem(350),
    borderRadius: pxToRem(30),
    ':last-of-type': {
      borderBottomLeftRadius: pxToRem(30),
      borderBottomRightRadius: pxToRem(30),
    },
  },
  summary: {
    padding: `${pxToRem(2)} ${pxToRem(37)} ${pxToRem(2)} ${pxToRem(15)}`,
  },
  divider: {
    borderWidth: pxToRem(2.5),
    borderRadius: pxToRem(3),
    marginRight: pxToRem(14),
    height: pxToRem(43),
    borderColor: '#A9A9A9',
  },
} as const;
