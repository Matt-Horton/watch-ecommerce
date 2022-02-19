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
import Product from './pages/Product/Product';
import CheckoutProvider from './context/CheckoutContext';

function App() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  return (
    <CheckoutProvider>
      <Router>
        <div className="App">
          <Navbar sideMenuOpen={sideMenuOpen} setSideMenuOpen={setSideMenuOpen} />
          <SideMenu open={sideMenuOpen} setOpen={setSideMenuOpen} />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/mens" element={<MensCatalog />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </CheckoutProvider>
  );
}

export default App;
