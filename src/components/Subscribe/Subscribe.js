import React from 'react';
import './Subscribe.scss';

export default function Subscribe() {
  return (
    <div className="subscribe-container">
      <div className="subscribe-content">
        <h2>Get 10% Discount</h2>
        <p>Updates on special offers & sales events. Join now and get 10% off</p>
        <form className="subscribe-form">
          <input placeholder="Please enter your e-mail" />
          <button>SUBSCRIBE</button>
        </form>
      </div>
    </div>
  );
}
