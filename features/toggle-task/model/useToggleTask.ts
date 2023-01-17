import { useCallback } from 'react';
import { Tasks } from '@entities/task/model';

export interface IUseToggleTasks {
  updateTaskCompletion: (id: number, completion: boolean) => void;
}

export function useToggleTasks(tasks: Tasks, updateTasks: (tasks: Tasks) => void): IUseToggleTasks {
  const updateTaskCompletion = useCallback(
    (id: number, completed: boolean): void => {
      const updatedTask = { ...tasks[id], completed };
      updateTasks({ ...tasks, [id]: updatedTask });
    },
    [tasks, updateTasks],
  );

  return { updateTaskCompletion };
}
