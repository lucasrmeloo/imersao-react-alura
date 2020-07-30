import React from 'react';
import PageDefalut from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroVideo() {
    return(
        <PageDefalut>
            <h1>Cadastro de Vídeo</h1>
            <Link to="categoria">
                Cadastrar Categoria
            </Link>
        </PageDefalut>
    );
}

export default CadastroVideo;
