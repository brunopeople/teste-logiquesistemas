import React from 'react';
import styled from 'styled-components';

const Explanation = styled.nav`
    display: flex;
    justify-content: center;
    background: rgb(151, 202, 229);
    color: #333;
    font-weight: bold;
    padding: 10vh;

    @media only screend and(min-width: 431px) and (max-width: 600px){
        font-size: 1.3em;
    }

    @media only screen and (min-width: 601px) and (max-width: 999px){
        font-size: 1.7em;
    }
`;

const ExplanationContent = styled.div`
    text-align: center;
    h1{
        font-size: 1.8em;
    }

    p{
        margin-top: 2vh;
        font-size: 1.2em;
    }
`;

export default props => {
    return(
        <Explanation>
            <ExplanationContent>
                <h1>Teste de Encutador de URL</h1>
                <p>Insira aqui o URL para que ele seja reduzido, compactadando o endereço de uma página web</p>
            </ExplanationContent>
        </Explanation>
    )
}