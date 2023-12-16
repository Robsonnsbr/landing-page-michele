import type { Metadata } from 'next';
import { Raleway, Inter } from 'next/font/google';
import './globals.css';
const raleway = Raleway({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

interface children {
  children: React.ReactNode;
}

const isValidFont = () => {
  if (raleway) {
    return raleway;
  }

  if (inter) {
    return inter;
  }
  console.log(new Error('Font is not valid'));
};

export const metadata: Metadata = {
  title: 'landing-page',
  description: 'landing page Dr. Michele M.'
};

export default function RootLayout({ children }: children) {
  return (
    <html lang="pt-BR">
      <link rel="icon" href="./favicon.ico" sizes="any" />
      <body
        suppressHydrationWarning={true}
        className={isValidFont() ? isValidFont()?.className : 'font-sans'}
      >
        {children}
      </body>
    </html>
  );
}
