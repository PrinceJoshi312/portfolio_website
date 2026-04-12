import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CustomCursor } from './CustomCursor';
import { useLenis } from '../../hooks/useLenis';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  useLenis();

  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-indigo-500 selection:text-white">
      <CustomCursor />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
