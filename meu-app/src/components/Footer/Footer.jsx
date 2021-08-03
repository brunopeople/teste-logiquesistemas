import React from 'react';
import styled from 'styled-components';

const Footer = styled.div`
    border-top: solid 1px #045c94;

    .linkgit{
        color: rgb(20,20,150);
    }
`;

const FooterContent = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 3vh;
    margin-bottom: 3vh;

` ;


export default props => {
    return(
        <Footer>
            <FooterContent>
                <p>2020 - Desenvolvido por <a className="linkGit" href="https://github.com/brunopeople" target="_blank" rel="noopener noreferrer">Bruno Pessoa Nunes De Melo</a></p>
            </FooterContent>
        </Footer>
    )
}