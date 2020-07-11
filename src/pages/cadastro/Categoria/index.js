import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  // Usando Efeitos

  // # componentDidMount / ComponenteJaMontou
  // # Momento <3
  // Antes de atualizar
  // Criação
  // Pós atualizar
  // Atualizado
  // Desconstrução

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    // chave: nome, descricao, bla, bli
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  useEffect(() => {
    const SITE = 'https://aluraflix-server.imersao-alura.vercel.app';
    const PATH = '/api/categorias?palavraSecreta=mario';
    fetch(`${SITE}${PATH}`)
      .then((respostaDoServidor) => {
        if (respostaDoServidor.ok) {
          return respostaDoServidor.json();
        }

        throw new Error('Não foi possível pegar os dados');
      })
      .then((dadosDoServidor) => {
        setCategorias(dadosDoServidor.categorias);
      })
      .catch((err) => {
        console.error('Erro: ', err.message);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
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
          label="Descrição:"
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

      <h2>Categorias já cadastradas</h2>
      <ul>
        {categorias.length === 0 && 'Loading...'}
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

// AJAX
// Requisição que você controla do que tem que ser autorizado de form assincrona

export default CadastroCategoria;
