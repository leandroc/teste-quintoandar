export default function Mascara(e) {
  let elValue = e.target.value;
  let inputLength = elValue.length <= 15;

  if (e.type === 'paste') {
    e.stopPropagation();
    e.preventDefault();

    const clipboardData = e.clipboardData || window.clipboardData;
    const pastedData = clipboardData.getData('Text');
    const numero = extrairNumeros(pastedData);

    elValue = formatar(numero);
  } else if (inputLength) {
    elValue = formatar(elValue);
  } else {
    elValue = elValue.substring(0, elValue.length - 1);
  }

  e.target.value = elValue;
}

function extrairNumeros(str) {
  return str.split('').filter(function (x) {
    return /\d/.test(x);
  }).join('');
}

function formatar(valor) {
  let mascara = '(xx) xxxx-xxxxx'
  let novoValor = '';
  let valorNumero = extrairNumeros(valor);

  let lidos = 0;
  for (let i = 0; i < mascara.length; i++) {
    let valorChar = valorNumero.charAt(lidos);
    let mascaraChar = mascara.charAt(i);

    switch (mascaraChar) {
      case 'x':
        if (valorChar) {
          novoValor += valorChar;
          lidos++;
        } else {
          return novoValor;
        }
        break;
      default:
        novoValor += mascaraChar;
        break;
    }
  }

  return novoValor;
}

