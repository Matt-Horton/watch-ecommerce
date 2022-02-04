import React, { useState } from 'react';
import './styles/global.scss';
import Navbar from './components/Navbar/Navbar';
import SideMenu from './components/SideMenu/SideMenu';
import HeroBanner from './components/HeroBanner/HeroBanner';
import Catalog from './components/Catalog/Catalog';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';

function App() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  return (
    <div className="App">
      <Navbar sideMenuOpen={sideMenuOpen} setSideMenuOpen={setSideMenuOpen} />
      <SideMenu open={sideMenuOpen} setOpen={setSideMenuOpen} />
      <HeroBanner />
      <Catalog />
      <Subscribe />
      <h3>Popular Products</h3>
      <Footer />
    </div>
  );
}

export default App;
