import { TaskGroups, Tasks, Task } from './model';
import {
  addDays,
  formatDate,
  generateDatesInCurrentMonth,
  getRandomInt,
  getRandomValueFromList,
} from 'shared/utils';

const taskTitles = ['Visit Dad', 'Goceries For Dinner', `Fix Dad's iPad`];
const taskGroups = [TaskGroups.family, TaskGroups.home, TaskGroups.service];

export function createTask(id: number, date: Date) {
  const title = getRandomValueFromList(taskTitles);
  const group = getRandomValueFromList(taskGroups);

  return {
    id,
    title,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    group,
    completed: false,
    date,
    formattedDate: formatDate(date),
  };
}

export function generateMockTasks(): Tasks {
  const today = new Date();
  const leftDaysInMonth = generateDatesInCurrentMonth(today);

  const currentTasks = {
    1: {
      id: 1,
      title: 'Visit Dad',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      group: TaskGroups.family,
      completed: false,
      date: today,
      formattedDate: formatDate(today),
    },
    2: {
      id: 2,
      title: 'Goceries For Dinner',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      group: TaskGroups.home,
      completed: false,
      date: today,
      formattedDate: formatDate(today),
    },
    3: {
      id: 3,
      title: `Fix Dad's iPad`,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      group: TaskGroups.service,
      completed: false,
      date: today,
      formattedDate: formatDate(today),
    },
  };

  const mockTasks = leftDaysInMonth.reduce(
    (result, date) => ({
      ...result,
      ...new Array(getRandomInt(1, 6))
        .fill(null)
        .map((_, index) => {
          const step = 1;
          const lastId = Object.keys(result).at(-1);
          const currentId = Number(lastId) + index + step;
          return createTask(currentId, date);
        })
        .reduce((generatedTasks, task) => ({ ...generatedTasks, [task.id]: task }), {}),
    }),
    currentTasks,
  );

  return mockTasks;
}

type TaskGroupByDate = {
  [key: string]: Task[];
};

export function groupTasksByDate(tasks: Tasks) {
  const taskList = Object.values(tasks);
  const groupedByDate = taskList.reduce<TaskGroupByDate>((result, task) => {
    if (!result[task.formattedDate]) {
      return { ...result, [task.formattedDate]: [task] };
    }

    result[task.formattedDate].push(task);
    return result;
  }, {});

  return groupedByDate;
}

export function getTodayTasks(taskList: TaskGroupByDate) {
  const today = formatDate(new Date());

  return taskList[today];
}

const NEXT_DAY_COUNT = 1;

export function getTomorrowTasks(taskList: TaskGroupByDate) {
  const today = new Date();
  const tomorrow = addDays(today, NEXT_DAY_COUNT);
  const formattedTomorrow = formatDate(tomorrow);

  return taskList[formattedTomorrow];
}

export function getOtherTasks(taskList: TaskGroupByDate) {
  const today = new Date();
  const tomorrow = addDays(today, NEXT_DAY_COUNT);
  const formattedToday = formatDate(today);
  const formattedTomorrow = formatDate(tomorrow);

  const otherTasks = { ...taskList };
  delete otherTasks[formattedToday];
  delete otherTasks[formattedTomorrow];

  return otherTasks;
}
