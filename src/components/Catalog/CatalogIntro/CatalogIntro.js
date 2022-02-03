import React from 'react';
import './CatalogIntro.scss';

export default function CatalogIntro() {
  return (
    <div className="container">
      <div className="catalog-intro-container">
        <div className="catalog-intro-content">
          <h2>CHOOSE YOUR STYLE</h2>
          <p>Vintage Timepieces is an authorized dealer of luxury watches, available for sale online with an international manufacturers guarantee.
            Purchase plans available to spread the cost of buying your dream watch.</p>
          <button className="catalog-intro-btn">CATALOG</button>
        </div>
      </div>
    </div>
  );
}
