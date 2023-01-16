import { SxStyles } from 'app/styles/theme';

export const styles: SxStyles = {
  switch: {
    padding: 0,
    '.MuiSwitch-thumb': {
      '::before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.8976 13.2468L6.61086 7.95169L1.32411 13.2468L0.143738 12.0664L5.4388 6.77962L0.143738 1.49287L1.32411 0.3125L6.61086 5.60756L11.8976 0.320813L13.0697 1.49287L7.78293 6.77962L13.0697 12.0664L11.8976 13.2468Z' fill='%23A9A9A9'/%3E%3C/svg%3E")`,
      },
    },
    '.Mui-checked .MuiSwitch-thumb': {
      '::before': {
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='15' height='12' viewBox='0 0 15 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M14.3938 1.1937L6.47953 11.0892L0.262512 5.90778L1.43553 4.50016L6.2156 8.48293L12.9641 0.0500031L14.3938 1.1937Z' fill='%23A9A9A9'/%3E%3C/svg%3E")`,
      },
    },
  },
} as const;
