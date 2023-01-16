import { ReactNode } from 'react';
import { ListItem } from '@mui/material';

interface ITaskRowProps {
  before?: ReactNode;
  after?: ReactNode;
}

function TaskRow(props: ITaskRowProps) {
  const { before, after } = props;
  return (
    <ListItem secondaryAction={after} disablePadding disableGutters>
      {before}
    </ListItem>
  );
}

export default TaskRow;
