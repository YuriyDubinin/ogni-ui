import {Montserrat} from 'next/font/google';
import './styles/globals.css';

const montserrat = Montserrat({subsets: ['latin'], variable: '--var-montserrat'});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
