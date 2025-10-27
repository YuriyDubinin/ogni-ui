import type {Metadata} from 'next';

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
  return <main className={styles.main}>Test</main>;
}
