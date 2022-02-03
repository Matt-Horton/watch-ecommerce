import React from 'react';
import './CatalogBenefits.scss';
import { HiOutlineShieldCheck, HiOutlineCalendar, HiOutlineStar } from 'react-icons/hi';

export default function CatalogBenefits() {
  return (
    <div className="container">
      <div className="benefits-container">
        <div className="benefit">
          <h5 className="benefit-text">30 Day Money Back Guarantee</h5>
          <HiOutlineShieldCheck size={20} />
        </div>
        <div className="benefit">
          <h5 className="benefit-text">Free Shipping</h5>
          <HiOutlineCalendar size={20} />
        </div>
        <div className="benefit">
          <h5 className="benefit-text">Authorized Retailer</h5>
          <HiOutlineStar size={20} />
        </div>
      </div>
    </div>
  );
}
