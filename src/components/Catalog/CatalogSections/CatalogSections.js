import React from 'react';
import './CatalogSections.scss';

export default function CatalogSections() {
  return (
    <div className="container">
      <div className="sections-container">
        <div className="section section-mens">
          <h4 className="section-heading">Mens Watches</h4>
          <h4 className="section-link">Browse</h4>
        </div>
        <div className="section section-womens">
          <h4 className="section-heading">Womens Watches</h4>
          <h4 className="section-link">Browse</h4>
        </div>
        <div className="section section-how-to">
          <h4 className="section-heading">How to select watches</h4>
          <h4 className="section-link">Browse</h4>
        </div>
        <div className="section section-trends">
          <h4 className="section-heading">Trends 2022</h4>
          <h4 className="section-link">Browse</h4>
        </div>
      </div>
    </div>
  );
}
