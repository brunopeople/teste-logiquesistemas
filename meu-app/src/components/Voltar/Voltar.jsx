import React from 'react';
import { Link }  from 'react-router-dom';

import './Voltar.css';

export default props => {
    return(
        <Link className="link-voltar" to="/">Retornar para a Pagina Home</Link>
    )
}