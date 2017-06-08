import React from 'react';

import './HeaderForm.css';

const HeaderForm = () => {
  return (
    <div className="HeaderForm">
      <h2>O jeito fácil de alugar e morar</h2>

      <p>Alugue rápido, sem fiador e com segurança!</p>

      <form onSubmit={e => e.preventDefault()}>
        <label htmlFor="buscaImovel">Busque por bairro, rua ou código do imóvel</label>

        <input
          id="buscaImovel"
          type="search"
          placeholder="Busque por bairro, rua ou código do imóvel" />

        <button type="submit">
          <span>Buscar</span>
        </button>
      </form>

      <p><small>Apartamentos em São Paulo, ABC e Campinas</small></p>
    </div>
  )
}

export default HeaderForm;
