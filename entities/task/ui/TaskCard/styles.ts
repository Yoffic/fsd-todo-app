import { SxStyles } from 'app/styles/theme';
import { pxToRem } from 'app/styles/theme/utils';

export const styles: SxStyles = {
  cardWrapper: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
  },
  divider: {
    borderWidth: pxToRem(2.5),
    borderRadius: pxToRem(3),
    marginRight: pxToRem(14),
    height: pxToRem(43),
  },
  textWrapper: {
    margin: 0,
    justifyContent: 'space-between',
    height: pxToRem(46),
  },
  description: {
    color: 'rgba(255, 255, 255, 0.6)',
  },
  completedTitle: {
    textDecorationLine: 'line-through',
  },
} as const;
