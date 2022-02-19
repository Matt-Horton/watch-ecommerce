import React from 'react';
import './BuyButton.scss';

export default function BuyButton({ onPress }) {
  return (
    <button className="buy-btn" onClick={onPress}>
      ADD TO CART
    </button>
  )
}
