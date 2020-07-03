/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PageRoot from '../../../components/PageRoot';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000',
  };
  const [values, setValues] = useState(valoresIniciais);

  function setValue(fieldName, value) {
    setValues({
      ...values,
      [fieldName]: value,
    });
  }

  function handleChange(event) {
    setValue(event.target.getAttribute('name'), event.target.value);
  }

  return (
    <PageRoot>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={(event) => {
        console.log(categorias);
        event.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);
        setValues(valoresIniciais);
      }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <button type="submit">
          Cadastrar
        </button>
      </form>

      <ul>
        {
          categorias.map((categoria) => <li key={categoria.nome}>{categoria.nome}</li>)
        }
      </ul>

    </PageRoot>
  );
}

export default CadastroCategoria;
