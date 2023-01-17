import { List } from '@mui/material';

import { Tasks } from '@entities/task/model';
import TaskCard from '@entities/task/ui/TaskCard';
import TaskRow from '@entities/task/ui/TaskRow';
import ToggleTask from 'features/toggle-task/ui';

import { styles } from './styles';

interface ITaskListProps {
  tasks?: Tasks;
}

function TaskList(props: ITaskListProps) {
  const { tasks } = props;

  if (!tasks) return null;

  return (
    <List sx={styles.list}>
      {Object.values(tasks).map((task) => (
        <TaskRow
          key={task.id}
          before={<TaskCard taskId={task.id} />}
          after={<ToggleTask taskId={task.id} />}
        />
      ))}
    </List>
  );
}

export default TaskList;
