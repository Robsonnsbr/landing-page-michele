'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import isMobile from 'is-mobile';

export const MobileContext = createContext({});

export const MobileProvider = ({ children }: { children: React.ReactNode }) => {
  console.log();
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    setIsMobileDevice(isMobile());
  }, []);

  return (
    //TODO: Ajustar o context de isMobile
    // <MobileContext.Provider value={{ isMobileDevice, setIsMobileDevice }}>
    <MobileContext.Provider value={isMobileDevice}>
      {children}
    </MobileContext.Provider>
  );
};

export const useMobile = () => {
  const context = useContext(MobileContext);
  if (context === undefined) {
    throw new Error('useMobile must be used within a MobileProvider');
  }
  return context;
};
