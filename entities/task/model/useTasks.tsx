import { useCallback, useState } from 'react';
import { generateMockTasks } from '@entities/task/lib';
import { Tasks } from './tasks';

export interface IUseTasks {
  tasks: Tasks;
  updateTasks: (tasks: Tasks) => void;
}

const mockTasks = generateMockTasks();

export function useTasks(): IUseTasks {
  const [tasks, setTasks] = useState<Tasks>(mockTasks);
  const updateTasks = useCallback((nextTasks: Tasks) => setTasks(nextTasks), []);

  return { tasks, updateTasks };
}
