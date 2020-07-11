import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { useForm } from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: 'Update 01',
    descricao: 'Bla',
    cor: '#000',
  }
  const {
    handleChange,
    setValues,
    values
  } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = 'http://localhost:3000';
    fetch(`${URL}/api/categorias?palavraSecreta=mario`)
      .then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategorias(resposta.categorias);
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      })
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();

        const URL = 'https://aluraflix-server.imersao-alura.vercel.app';
        fetch(`${URL}/api/categorias?palavraSecreta=mario`, {
          method: 'POST',
          body: JSON.stringify({
            "nome": values.nome,
            "descricao": values.descricao,
            "cor": values.cor,
          }),
          headers: {
            'Content-type': 'application/json; charset=utf-8'
          }
        })
          .then(async (respostaDoServer) => {
            if (respostaDoServer.ok) {
              const resposta = await respostaDoServer.json();
              console.log(resposta);
              return;
            }
            console.error('Essa categoria já existe');
          })

        setCategorias([
          ...categorias,
          values
        ]);

        setValues(valoresIniciais)
      }}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição:"
          type="????"
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

        <button>
          Cadastrar
        </button>
      </form>


      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;