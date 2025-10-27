import {Montserrat} from 'next/font/google';
import './styles/globals.css';
import Footer from './layouts/Footer';

const montserrat = Montserrat({subsets: ['latin'], variable: '--var-montserrat'});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
