import React from 'react';

import './HeaderNav.css';

const HeaderNav = ({menuHandler}) => {
  return (
    <nav className="HeaderNav">
      <button
        onClick={e => menuHandler(e)}
        className="HeaderNav-handler"
        type="button">Menu</button>

      <ul className="HeaderNav-list">
        <li className="HeaderNav-item">
          <a>Anunciar Imóvel</a>
        </li>
        <li className="HeaderNav-item">
          <a className="admin">Admin</a>
        </li>
        <li className="HeaderNav-item">
          <a className="favoritos">Favoritos</a>
        </li>
        <li className="HeaderNav-item">
          <button>Olá, Moacyr Ricardo Pereira</button>
        </li>
      </ul>
    </nav>
  )
}

export default HeaderNav;
