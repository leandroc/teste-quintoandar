import React from 'react';

import logo from '../images/logo.svg';

import './Logo.css';

const Logo = () => {
  return (
    <a className="Logo">
      <img src={logo} alt="QuintoAndar" />
    </a>
  )
}

export default Logo;
