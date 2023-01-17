import { ReactNode } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material';

import ExpandIcon from 'public/ExpandIcon.svg';
import { styles } from './styles';

interface ITaskGroupProps {
  title: string;
  children: ReactNode;
}
function TaskGroup(props: ITaskGroupProps) {
  const { title, children } = props;

  return (
    <Accordion sx={styles.group} disableGutters>
      <AccordionSummary
        expandIcon={
          <SvgIcon
            component={ExpandIcon}
            aria-controls={`${title}-content`}
            id={`${title}-header`}
          />
        }
        sx={styles.summary}
      >
        <Stack direction="row" alignItems="center">
          <Divider orientation="vertical" sx={styles.divider} />
          <Typography variant="h2">{title}</Typography>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
}

export default TaskGroup;
