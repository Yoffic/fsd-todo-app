import { useState } from 'react';
import { TaskGroups } from './enum';
import { Tasks } from './tasks';

const today = new Date();

const mockTasks: Tasks = {
  1: {
    id: 1,
    title: 'Visit Dad',
    description: 'Lorem Ipsum Dolor Sit met...',
    group: TaskGroups.family,
    completed: false,
    date: today,
  },
  2: {
    id: 2,
    title: 'Goceries For Dinner',
    description: 'Lorem Ipsum Dolor Sit met...',
    group: TaskGroups.home,
    completed: false,
    date: today,
  },
  3: {
    id: 3,
    title: `Fix Dad's iPad`,
    description: 'Lorem Ipsum Dolor Sit met...',
    group: TaskGroups.service,
    completed: false,
    date: today,
  },
};

export interface IUseTasks {
  tasks: Tasks;
  updateTasks: (tasks: Tasks) => void;
}

export function useTasks(): IUseTasks {
  const [tasks, setTasks] = useState<Tasks>(mockTasks);

  return { tasks, updateTasks: setTasks };
}
