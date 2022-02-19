import React from 'react';
import './CatalogSections.scss';

export default function CatalogSections() {
  return (
    <div className="container">
      <div className="sections-container">
        <div className="section section-mens">
          <img className="section-image" src={require('../../../assets/mens-watches.jpg')} />
          <h4 className="section-heading">Mens Watches</h4>
          <h4 className="section-link">Browse</h4>
        </div>
        <div className="section section-womens">
          <img className="section-image" src={require('../../../assets/womens-watch.jpg')} />
          <h4 className="section-heading">Womens Watches</h4>
          <h4 className="section-link">Browse</h4>
        </div>
        <div className="section section-how-to">
          <img className="section-image" src={require('../../../assets/how-to-select.jpg')} />
          <h4 className="section-heading">How to select watches</h4>
          <h4 className="section-link">Browse</h4>
        </div>
        <div className="section section-trends">
          <img className="section-image" src={require('../../../assets/trends.jpg')} />
          <h4 className="section-heading">Trends 2022</h4>
          <h4 className="section-link">Browse</h4>
        </div>
      </div>
    </div>
  );
}
