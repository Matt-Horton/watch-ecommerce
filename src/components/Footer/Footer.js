import React from 'react';
import FooterCopyright from './FooterCopyright/FooterCopyright';
import FooterLinks from './FooterLinks/FooterLinks';

export default function Footer() {
  return (
    <footer>
      <FooterLinks />
      <FooterCopyright />
    </footer>
  );
}
