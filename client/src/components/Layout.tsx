
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';


const Layout: React.FC = () => {

  return (
    <div className="min-h-screen bg-black text-white">
  
      <Header />
      <br/>
      <Outlet />
      <br/>
      <Footer/>
    </div>
  );
};

export default Layout;