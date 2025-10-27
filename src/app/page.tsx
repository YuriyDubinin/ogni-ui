import type {Metadata} from 'next';
import {cookies} from 'next/headers';

import styles from './styles/style.module.css';

export const metadata: Metadata = {
  title: 'Ogni App',
  description: '',
  openGraph: {
    title: 'Ogni App',
    description: '',
    url: 'exampledomen.com',
    siteName: 'Ogni App',
    images: [
      {
        url: '/',
        width: 1260,
        height: 800,
      },
    ],
  },
};

export default function Main() {
  console.log('cookie: ', cookies().getAll());
  return <main className={styles.main}>Test</main>;
}
