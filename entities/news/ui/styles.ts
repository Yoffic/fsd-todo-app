import { SxStyles } from '@app/styles/theme';
import { pxToRem } from '@app/styles/theme/utils';

export const styles: SxStyles = {
  wrapper: {
    width: pxToRem(350),
    height: pxToRem(50),
    position: 'fixed',
    bottom: '0',
    left: `calc(50% - ${pxToRem(350)}/2)`,
    borderRadius: pxToRem(6),
    paddingLeft: pxToRem(16),
    paddingRight: pxToRem(16),
  },
  line: {
    display: 'block',
    width: '100%',
    height: pxToRem(50),
    margin: '0 auto',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    paddingTop: pxToRem(16),
  },
  text: {
    display: 'inline-block',
    animation: `text 110s infinite linear`,
    paddingLeft: '100%',
    '@keyframes text': {
      '0%': {
        transform: 'translate(0, 0)',
      },
      '100%': {
        transform: 'translate(-100%, 0)',
      },
    },
  },
  news: {
    paddingRight: pxToRem(8),
    color: '#F2F2F2',
  },
} as const;
