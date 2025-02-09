
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout: React.FC = () => {

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;