import React, { useState } from 'react';
import './styles/global.scss';
import Navbar from './components/Navbar/Navbar';
import SideMenu from './components/SideMenu/SideMenu';

function App() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  return (
    <div className="App">
      <Navbar sideMenuOpen={sideMenuOpen} setSideMenuOpen={setSideMenuOpen} />
      <SideMenu open={sideMenuOpen} setOpen={setSideMenuOpen} />
    </div>
  );
}

export default App;
