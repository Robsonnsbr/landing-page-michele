import type { Metadata } from 'next';
import { Raleway, Inter } from 'next/font/google';
import { MobileProvider } from 'src/context/MobileProvider';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

const raleway = Raleway({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });
import '@/styles/globals.css';
import { NavBarMobile } from 'src/components/mobile';
import { NavBar } from 'src/components/navBar';
import Motion from 'src/components/common/Motion';

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
  title: {
    default: 'Michele Moccelin',
    template: '%s | michelemoccelin'
  },
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
        <MobileProvider>
          <Motion>
            <div className="class-primary-Wrapper">
              <Header className="class-Header" />
              <NavBar />
              <NavBarMobile />
              {children}
              <Footer className="class-Footer" />
            </div>
          </Motion>
        </MobileProvider>
      </body>
    </html>
  );
}
