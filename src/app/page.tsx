import type {Metadata} from 'next';
import styles from './styles/style.module.css';
import InfoList from '@/app/components/InfoList';

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

export default function MainPage() {
  return (
    <main className={styles.main}>
      <InfoList items={[{}, {}, {}, {}, {}]} />
    </main>
  );
}
