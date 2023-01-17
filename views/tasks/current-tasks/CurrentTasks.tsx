import { ReactNode } from 'react';
import { Paper, Stack, SvgIcon, Typography } from '@mui/material';
import { pxToRem } from '@app/styles/theme/utils';

import Check from 'public/Check.svg';

import { styles } from './styles';

interface ICurrentTasksProps {
  children: ReactNode;
}

function CurrentTasks(props: ICurrentTasksProps) {
  const { children } = props;
  return (
    <Stack sx={styles.wrapper} spacing={pxToRem(16)}>
      <Stack direction="row" spacing={pxToRem(10)} sx={styles.title}>
        <SvgIcon component={Check} />
        <Typography variant="h2">Today Tasks:</Typography>
      </Stack>
      <Paper>{children}</Paper>
    </Stack>
  );
}

export default CurrentTasks;
