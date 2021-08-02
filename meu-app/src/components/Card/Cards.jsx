import React from 'react';
import styled from 'styled-components';

import Card from './Card';

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    jsutify-content: space-around;
    margin-top: 2vh;
    `;

    export default props => {
        return(
            <Cards>
                <Card title="Gratuito" icon="fas fa-coins icon" color="#ffd700" description="não há limitações"/>
                <Card title="Cadastre" icon="fas fa-lock-open icon" color="fas fa-lock-open icon" color="#89c64e" description="Veja a lista de url cadastradas!"/>
                <Card title="Fácil" icon="far fa-smile-wink icon" color="#045c94" description="Faça o seu Login e use o sistema." />
            </Cards>
        )
    }