import { Box } from '@mui/material';
import { ReactNode } from 'react';

import { styles } from './styles';

interface IMainLayoutProps {
  children: ReactNode;
}

function MainLayout(props: IMainLayoutProps) {
  const { children } = props;

  return <Box sx={styles.layout}>{children}</Box>;
}

export default MainLayout;
