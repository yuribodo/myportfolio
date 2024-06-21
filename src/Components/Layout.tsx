import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Logo from './Logo';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <div className="layout">
        <Logo />
        <Navbar />
        <main className="content">{children}</main>
      </div>
    </div>
  );
}

export default Layout;

