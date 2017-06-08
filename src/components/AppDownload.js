import React from 'react';

import badge from '../images/bagde_best_apple.png';
import android from '../images/android.png';
import iphone from '../images/iphone.png';

import './AppDownload.css';

import MaskedTelefone from './MaskedTelefone';

const AppDownload = () => {
  return (
    <section className="AppDownload">
      <div className="AppDownload-wrapper">
        <div className="AppDownload-devices">
          <img src={android} alt=""/>
          <img src={iphone} alt=""/>
        </div>

        <a>
          <img src={badge} alt="Baixe na AppStore" />
        </a>

        <form onSubmit={e => e.preventDefault()}>
          <h2>Baixe o <strong>aplicativo QuintoAndar!</strong></h2>

          <label htmlFor="inputTelefone">Receba o link para download no seu celular:</label>

          <div className="AppDownload-form-group">
            <MaskedTelefone
              required
              maxLength="15"
              id="inputTelefone"
              placeholder="Insira seu número"
              type="text" />

            <button type="submit">Enviar link!</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default AppDownload;
