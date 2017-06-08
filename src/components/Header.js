import React from 'react';

import './Header.css';

import Logo from './Logo';
import HeaderNav from './HeaderNav';
import HeaderForm from './HeaderForm';

const Header = ({menuHandler}) => {
  return (
    <header className="Header">
      <h1 className="Header-logo">
        <Logo />
      </h1>

      <HeaderNav menuHandler={menuHandler} />

      <HeaderForm />
    </header>
  )
}

export default Header;
