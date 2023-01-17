import { Box, Divider, ListItemText } from '@mui/material';

import { Task, TaskGroups } from '@entities/task/model';
import { useTasksContext } from '@app/providers/tasks';

import { styles } from './styles';

const groupColors = {
  [TaskGroups.family]: '#FF0000',
  [TaskGroups.home]: '#366EFF',
  [TaskGroups.service]: '#FFEB33',
} as const;

interface ITaskProps {
  taskId: Task['id'];
}

function TaskCard(props: ITaskProps) {
  const { taskId } = props;
  const { tasks } = useTasksContext();

  if (!taskId) return null;

  const { title, description, group, completed } = tasks[taskId];
  const titleStyles = completed ? styles.completedTitle : {};

  return (
    <Box sx={styles.cardWrapper}>
      <Divider orientation="vertical" sx={{ ...styles.divider, borderColor: groupColors[group] }} />
      <ListItemText
        id={String(taskId)}
        sx={styles.textWrapper}
        primary={title}
        primaryTypographyProps={{ variant: 'h2', sx: titleStyles }}
        secondary={description}
        secondaryTypographyProps={{ variant: 'body1', sx: styles.description }}
      />
    </Box>
  );
}

export default TaskCard;
