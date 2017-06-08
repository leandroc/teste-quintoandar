import React, { Component } from 'react';

class MaskedTelefone extends Component {
  mascara = (e) => {
    let elValue = e.target.value;
    let inputLength = elValue.length <= 14;

    if( inputLength ) {
      elValue = formatar(elValue);
    } else {
      elValue = elValue.substring(0, elValue.length - 1);
    }

    function formatar(valor) {
      let mascara = '(xx) xxxx-xxxxx'
    	let novoValor = '';

      for ( let i = 0, proximo = 1; proximo && i < mascara.length; i++ ) {
        let valorChar = valor.charAt(i);
        let mascaraChar = mascara.charAt(i);

        if( mascara.charAt(i) === 'x' ) {
          if (/\d/.test(valorChar)) {
            novoValor += valorChar;
          } else {
            proximo = 0;
          }
        } else {
          novoValor += mascaraChar;
        }
      }

      return novoValor;
    }

    e.target.value = elValue;
  }

  render() {
    return (
      <div>
        <input {...this.props}
          onKeyPress={e => this.mascara(e)} />
      </div>
    )
  }
}

export default MaskedTelefone;
