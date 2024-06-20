import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Logo from './Logo';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Logo />
      <Navbar />
      <main className=" px-4">{children}</main> {/* Adjust padding for content */}
    </>
  );
}

export default Layout;
