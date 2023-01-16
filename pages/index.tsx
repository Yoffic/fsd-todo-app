import Head from 'next/head';
import { Abhaya_Libre } from '@next/font/google';

const abhayaLibre = Abhaya_Libre({ weight: '600', subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Simple Todo App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={abhayaLibre.className}></main>
    </>
  );
}
