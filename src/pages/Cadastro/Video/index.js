import React from 'react';
import { Link } from 'react-router-dom';
import PageRoot from '../../../components/PageRoot';


function CadastroVideo() {
  return (
    <PageRoot>
      <h1>Cadastro de Categoria</h1>
      <Link to="/cadastro/categoria">
        Cadastrar nova Categoria
      </Link>
    </PageRoot>
  );
}

export default CadastroVideo