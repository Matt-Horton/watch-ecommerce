import React, { useEffect, useState } from 'react';
import './styles/global.scss';
import Navbar from './components/Navbar/Navbar';
import SideMenu from './components/SideMenu/SideMenu';
import Footer from './components/Footer/Footer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import MensCatalog from './pages/MensCatalog';

function App() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <Navbar sideMenuOpen={sideMenuOpen} setSideMenuOpen={setSideMenuOpen} />
        <SideMenu open={sideMenuOpen} setOpen={setSideMenuOpen} />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/mens" element={<MensCatalog />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
