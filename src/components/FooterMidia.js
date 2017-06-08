import React from 'react';

import './FooterMidia.css';

const FooterMidia = () => {
  return (
    <div className="FooterMidia">
      <strong>O QuintoAndar na mídia</strong>

      <ul>
        <li>
          <a className="exame"><span>QuintoAndar em Exame</span></a>
        </li>
        <li>
          <a className="infomoney"><span>QuintoAndar em InfoMoney</span></a>
        </li>
        <li>
          <a className="estadao"><span>QuintoAndar em Estadão</span></a>
        </li>
        <li>
          <a className="pegn"><span>QuintoAndar em Pequenas Empresas & Grandes Negócios</span></a>
        </li>
      </ul>
    </div>
  )
}

export default FooterMidia;
