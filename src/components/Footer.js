import React from 'react';

import FooterMidia from './FooterMidia';
import FooterLinks from './FooterLinks';
import FooterInfo from './FooterInfo';

const Footer = () => {
  return (
    <footer className="Footer">
      <FooterMidia />

      <FooterLinks />

      <FooterInfo />
    </footer>
  )
}

export default Footer;
