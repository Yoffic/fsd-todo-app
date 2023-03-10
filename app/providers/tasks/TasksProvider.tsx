import { createContext, ReactNode, useContext, useMemo } from 'react';

import { useToggleTasks } from '@features/toggle-task/model';
import { Tasks, useTasks } from '@entities/task/model';

const initialState = {
  tasks: {},
  updateTaskCompletion: () => undefined,
};

interface ITasksState {
  tasks: Tasks;
  updateTaskCompletion: (id: number, completion: boolean) => void;
}

export const TasksContext = createContext<ITasksState>(initialState);
TasksContext.displayName = 'TasksContext';

export function useTasksContext() {
  return useContext(TasksContext);
}

interface ITasksProviderProps {
  children: ReactNode;
}
export function TasksProvider(props: ITasksProviderProps) {
  const { children } = props;
  const { tasks, updateTasks } = useTasks();
  const { updateTaskCompletion } = useToggleTasks(tasks, updateTasks);

  const contextValue = useMemo(
    () => ({
      tasks,
      updateTaskCompletion,
    }),
    [tasks, updateTaskCompletion],
  );

  return <TasksContext.Provider value={contextValue}>{children}</TasksContext.Provider>;
}
