import React from 'react';

import Mascara from '../mascara';

const MaskedTelefone = (props) => {
  return (
    <div>
      <input {...props}
        onPaste={e => Mascara(e)}
        onKeyPress={e => Mascara(e)} />
    </div>
  )
}

export default MaskedTelefone;
