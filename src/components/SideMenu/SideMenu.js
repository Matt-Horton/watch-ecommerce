import React from 'react';
import "./SideMenu.scss";
import { HiX } from 'react-icons/hi';

export default function SideMenu({ open, setOpen }) {
  return (
    <div className={`sidemenu-container ${open === true ? 'sidemenu-open' : ''}`}>
      <div className="sidemenu-contents">
        <button className="icon-button" onClick={() => setOpen(!open)}>
          <HiX size={25} />
        </button>
        <ul className="sidemenu-links">
          <li><a href="#mens">MENS</a></li>
          <li><a href="#ladies">LADIES</a></li>
          <li><a href="#brands">BRANDS</a></li>
        </ul>
      </div>
    </div>
  );
}
