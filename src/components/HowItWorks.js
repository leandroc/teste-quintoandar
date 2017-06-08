import React from 'react';

import escolhaagende from '../images/escolha-agende.svg';
import melhorescorretores from '../images/melhores-corretores.svg';
import semfiador from '../images/sem-fiador.svg';

import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="HowItWorks">
      <h2>Como funciona o QuintoAndar?</h2>

      <p className="HowItWorks-lead">
        Usamos tecnologia e design para simplificar a locação de imóveis residenciais.
        <br />
        Somos o jeito mais simples e seguro de alugar um imóvel.
      </p>

      <hr />

      <ul>
        <li>
          <img src={escolhaagende} alt="" />

          <h3>Escolha e agende</h3>

          <p>
            Fotos de qualidade, busca pelo mapa e filtros exclusivos.
            Fácil de usar para <strong>não precisar falar com ninguém</strong>.
            Você mesmo agenda pelo site as suas visitas com os melhores corretores.
          </p>
        </li>

        <li>
          <img src={melhorescorretores} alt="" />

          <h3>Visite com os melhores</h3>

          <p>
            Corretores selecionados para <strong>garantir um atendimento bacana,
            fácil e eficaz</strong>. Visite os imóveis selecionados com quem sabe
            tudo sobre o lugar onde você quer morar.
          </p>
        </li>

        <li>
          <img src={semfiador} alt="" />

          <h3>Alugue sem fiador</h3>

          <p>
            <strong>O seguro-fiança é por nossa conta.</strong> Você não precisa
            se preocupar em pedir ajuda pra ninguém, não precisa correr atrás de
            uma seguradora nem precisa depositar três meses de aluguel de uma vez.
            É mais fácil, e você não paga nada a mais por isso.
          </p>
        </li>
      </ul>
    </section>
  )
}

export default HowItWorks;
