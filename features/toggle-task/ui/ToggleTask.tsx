import { memo, useCallback } from 'react';
import Switch from '@mui/material/Switch';

import { Task } from '@entities/task/model';
import { useTasksContext } from '@app/providers/tasks';

import { styles } from './styles';

interface ITaskProps {
  taskId: Task['id'];
}

function ToggleTask(props: ITaskProps) {
  const { taskId } = props;
  const { tasks, updateTaskCompletion } = useTasksContext();
  const isCompleted = tasks[taskId].completed;

  const handleCompletion = useCallback((): void => {
    updateTaskCompletion(taskId, !isCompleted);
  }, [taskId, updateTaskCompletion, isCompleted]);

  return (
    <Switch
      checked={isCompleted}
      onChange={handleCompletion}
      inputProps={{ 'aria-label': 'controlled' }}
      sx={styles.switch}
    />
  );
}

export default ToggleTask;
