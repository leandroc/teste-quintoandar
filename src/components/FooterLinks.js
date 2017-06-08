import React from 'react';

import Logo from './Logo';

import './FooterLinks.css';

const FooterLinks = () => {
  return (
    <div className="FooterLinks">
      <Logo />

      <nav>
        <div>
          <strong>Quanto Cobrar?</strong>
          <ul>
            <li><a>Calcule seu aluguel</a></li>
          </ul>

          <strong>Navegue</strong>
          <ul>
            <li><a>Todos os imóveis</a></li>
            <li><a>Imóveis em São Paulo</a></li>
            <li><a>Imóveis em Campinas</a></li>
          </ul>
        </div>

        <div>
          <strong>Como Funciona</strong>
          <ul>
            <li><a>Para você corretor</a></li>
            <li><a>Para você inquilino</a></li>
            <li><a>Para você proprietário</a></li>
            <li><a>Indique um imóvel</a></li>
            <li><a>Ajuda</a></li>
          </ul>
        </div>

        <div>
          <strong>O Quinto Andar</strong>
          <ul>
            <li><a>Quem somos</a></li>
            <li><a>Carreiras</a></li>
            <li><a>Imprensa</a></li>
            <li><a>Fale conosco</a></li>
          </ul>
        </div>

        <div>
          <strong>Fique Conectado</strong>
          <ul>
            <li><a className="facebook">Facebook</a></li>
            <li><a className="instagram">Instagram</a></li>
            <li><a className="twitter">Twitter</a></li>
            <li><a className="medium">Medium</a></li>
            <li><a className="linkedin">LinkedIn</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default FooterLinks;
