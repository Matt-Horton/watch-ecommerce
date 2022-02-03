import React from 'react';
import './HeroBanner.scss';

export default function HeroBanner() {
  return (
    <div className="herobanner-container">
      <div className="herobanner-image-container">
        <img src={require('../../assets/hero-banner-image.png')} />
      </div>
      <div className="herobanner-content-container">
        <div className="herobanner-content">
          <h1 className="herobanner-large-text">All Nixon and Tissot watches 50% sale</h1>
          <p className="herobanner-small-text">Vintage Timepieces is an authorized dealer of luxury watches, available for sale online with an international manufacturers guarantee.
            Purchase plans available to spread the cost of buying your dream watch.</p>
          <button className="herobanner-btn">MORE</button>
        </div>
      </div>
    </div>
  );
}

