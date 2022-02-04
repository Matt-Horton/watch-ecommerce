import React from 'react';
import './FooterCopyright.scss';

export default function FooterCopyright() {
  return (
    <div className="footer-copyright-container">
      <div className="container">
        <div className="footer-copyright">
          <h5>&copy; 2022 Vintage Timepieces</h5>
          <div className="footer-social-links">
            <a href="#">Twitter</a>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
}
