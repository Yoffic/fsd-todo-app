import { Stack } from '@mui/material';

import { useTasksContext } from '@app/providers/tasks';
import TaskList from 'views/tasks/task-list';
import CurrentTasks from 'views/tasks/current-tasks';
import TaskGroup from 'views/tasks/task-group';
import {
  getOtherTasks,
  getTodayTasks,
  getTomorrowTasks,
  groupTasksByDate,
} from '@entities/task/lib';
import { Task } from '@entities/task/model';
import { pxToRem } from '@app/styles/theme/utils';

function TaskApp() {
  const { tasks } = useTasksContext();

  const taskListToRender = groupTasksByDate(tasks);
  const todayTasks = getTodayTasks(taskListToRender);
  const tomorrowTasks = getTomorrowTasks(taskListToRender);
  const otherTasks = getOtherTasks(taskListToRender);
  const otherDates = Object.keys(otherTasks);

  return (
    <Stack spacing={pxToRem(32)}>
      <CurrentTasks>
        <TaskList tasks={todayTasks} />
      </CurrentTasks>
      <TaskGroup title="Tomorrow Tasks">
        <TaskList tasks={tomorrowTasks} />
      </TaskGroup>
      {otherDates.map((date: Task['formattedDate']) => (
        <TaskGroup title={`${date} Tasks`} key={date}>
          <TaskList tasks={otherTasks[date]} />
        </TaskGroup>
      ))}
    </Stack>
  );
}

export default TaskApp;
