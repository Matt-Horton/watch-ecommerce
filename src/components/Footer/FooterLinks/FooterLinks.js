import React from 'react';
import './FooterLinks.scss';

export default function FooterLinks() {
  return (
    <div className="footer-links-container">
      <div className="container">
        <div className="footer-links">
          <div className="footer-links-section">
            <h4>Customer Service</h4>
            <ul>
              <li>877-144-2362</li>
              <li>
                Mon-Fri 9am - 6pm <br />
                Sat 10am - 7pm
              </li>
              <li>
                Brooklyn Army Terminal 140 <br />
                58th Street Suite 38 Brooklyn, <br />
                NY 11220
              </li>
            </ul>
          </div>
          <div className="footer-links-section">
            <h4>Orders & Returns</h4>
            <ul>
              <li><a href="#">Order Status</a></li>
              <li><a href="#">Returns & Refunds</a></li>
              <li><a href="#">Shipping</a></li>
            </ul>
          </div>
          <div className="footer-links-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#">What we do</a></li>
              <li><a href="#">Company Info</a></li>
              <li><a href="#">FAQ's</a></li>
              <li><a href="#">Work Here</a></li>
            </ul>
          </div>
          <div className="footer-links-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
