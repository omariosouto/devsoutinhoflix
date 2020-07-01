import React, { useState } from 'react';
import PageRoot from '../../../components/PageRoot';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);
  const [nomeCategoria, setNomeCategoria] = useState('');
  return (
    <PageRoot>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={function(event) {
        event.preventDefault();
        setCategorias([
          ...categorias,
          nomeCategoria
        ]);

        setNomeCategoria('');
      }}>
        <label>
          Nome da Categoria:
          <input
            type="text"
            value={nomeCategoria}
            onChange={function(event) {
              setNomeCategoria(event.target.value);
            }}
          />
        </label>

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {
          categorias.map((categoria) => {
            return <li key={categoria}>{categoria}</li>;
          })
        }

      </ul>

    </PageRoot>
  );
}

export default CadastroCategoria 