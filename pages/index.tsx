import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Abhaya_Libre, Actor } from '@next/font/google';
import { Typography } from '@mui/material';

import { TasksProvider } from '@app/providers/tasks';
import MainLayout from 'views/main-layout';
import TaskApp from 'views/tasks/task-app';

const abhayaLibre = Abhaya_Libre({ weight: '600', subsets: ['latin'] });
const actor = Actor({ weight: '400', subsets: ['latin'] });

export default function Home() {
  const [isSSR, setSSR] = useState<boolean>(true);

  useEffect(() => {
    setSSR(false);
  }, []);

  if (isSSR) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Simple Todo App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={abhayaLibre.className}>
        <MainLayout>
          <div className={actor.className}>
            <Typography variant="h1">To Do</Typography>
          </div>
          <TasksProvider>
            <TaskApp />
          </TasksProvider>
        </MainLayout>
      </main>
    </>
  );
}
