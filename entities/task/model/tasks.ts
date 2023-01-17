import { TaskGroups } from './enum';

export type Task = {
  id: number;
  title: string;
  description: string;
  group: TaskGroups;
  completed: boolean;
  date: Date;
  formattedDate: string;
};

export type Tasks = {
  [id: number]: Task;
};
