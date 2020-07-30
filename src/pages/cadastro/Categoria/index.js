import React, { useState } from 'react';
import PageDefalut from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
    const [categorias, setCategorias] = useState([])

    const valoresIniciais = {
        name: '',
        description: '', 
        color: '',
    }

    const [values, setValues] = useState(valoresIniciais);

    function setValue(key, value) {
        setValues({
            ...values,
            [key]: value,
        })
    }

    function handleChange(e) {
        setValue(
          e.target.getAttribute('name'),
          e.target.value
        );
    }

    return(
        <PageDefalut>
            <h1>Cadastro de Categoria: {values.name}</h1>

            <form onSubmit={(e) => {
                e.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ])

                setValues(valoresIniciais)
            }}>

                <FormField 
                    label="Nome da Categoria"
                    type="text"
                    name="name"
                    value={values.nome}
                    onChange={handleChange}
                />


                <FormField 
                    label="Descrição"
                    type="textarea"
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                />

                <FormField 
                    label="Cor"
                    type="color"
                    name="color"
                    value={values.cor}
                    onChange={handleChange}
                />



                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, index) => {
                    return (
                    <li key={`${categoria}-${index}`}>{categoria.name}</li>
                    )} )
                }
            </ul>

            <Link to="/">
                Ir para home
            </Link>
        </PageDefalut>
    );
}

export default CadastroCategoria;
