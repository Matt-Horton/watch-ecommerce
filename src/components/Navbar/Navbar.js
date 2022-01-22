import React from 'react';
import './Navbar.scss';
import { HiMenuAlt1, HiSearch, HiOutlineShoppingCart } from 'react-icons/hi';
import { FaCrown } from 'react-icons/fa';

const Navbar = ({ sideMenuOpen, setSideMenuOpen }) => {
  return (
    <header>
      <div className="navbar">
        <div className="container">
          <div className="navbar-content">
            <FaCrown size={30} className="brand-logo" />
            <ul className="navbar-links">
              <li><a href="#mens">MENS</a></li>
              <li><a href="#ladies">LADIES</a></li>
              <li><a href="#brands">BRANDS</a></li>
            </ul>
            <div className="navbar-right">
              <HiOutlineShoppingCart size={25} />
              <div className="navbar-right-menu">
                <HiSearch size={25} />
                <button onClick={() => setSideMenuOpen(!sideMenuOpen)} className="icon-button">
                  <HiMenuAlt1 size={25} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;