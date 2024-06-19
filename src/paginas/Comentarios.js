import React, { useState, useEffect } from "react";
import Axios from 'axios';

const Comentarios = () => {
    const [inputs, setInputs] = useState([]);
    const [listaCom, setListaCom] = useState([]);
    const [erros, setErros] = useState({});


    const validaInputs = (values) => {
        let erros1 = {};

        if (!values.nome) {
            erros1.nome = "Nome não informado";
        }

        if (!values.email) {
            erros1.email = "Email não informado";
        }

        if (!values.comentario) {
            erros1.comentario = "Comentario não informado";
        }
        return erros1;
    };



    const handleChange = (elemento) => {
        const name = elemento.target.name;
        const value = elemento.target.value;

        setInputs(valores => ({...valores, [name] : value}))
    }

    const handleSubmit = (elemento) => {
        elemento.preventDefault(); //evitar reload da página

        let erro2 = validaInputs(inputs) 
        setErros(erro2);

        if (Object.keys(erro2).length === 0) {
            Axios.post('http://localhost:8082/add',
                {
                    nome : inputs.nome,
                    email : inputs.email,
                    comentario : inputs.comentario,
                }
            ).then(atualizaListaCom, []);
            setInputs('');
        }
    }

    const handleDelete = (id) => {
        Axios.get("http://localhost:8082/excluir/" + id)
        .then(atualizaListaCom,[]);
    };

    const atualizaListaCom = () => {
        Axios.get("http://localhost:8082")
        .then(
            (resposta) => { setListaCom(resposta.data) }   
        );
    };

    useEffect(atualizaListaCom, []);

    return (

        <main className="col-8 ">

            <form className="rounded p-3" onSubmit={handleSubmit}>
                
                {/* <h1>{inputs.nome + ' ' + inputs.email + ' ' + inputs.comentario}</h1> */}
                
                <legend>Deixe aqui seu coment&aacute;rio</legend>
            
                <label className="form-label mt-3 d-flex justify-content-between  rounded">Nome
                    {erros.nome ? (<span className="bg-danger px-2 text-white">{erros.nome}</span>) : null}
                </label>

                <input 
                    type="text" 
                    id="nome" 
                    name="nome" 
                    className="form-control" 
                    onChange={handleChange}
                    value={inputs.nome || ''}
                    />

                <label className="form-label mt-3 d-flex justify-content-between  rounded">Email
                    {erros.email ? (<span className="bg-danger px-2 text-white">{erros.email}</span>) : null}
                </label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="form-control" 
                    onChange={handleChange} 
                    value={inputs.email || ''}
                    />

                <label className="form-label mt-3 d-flex justify-content-between rounded">Comentário
                    {erros.comentario ? (<span className="bg-danger px-2 text-white">{erros.comentario}</span>) : null}
                </label>
                <textarea 
                    id="comentario" 
                    name="comentario" 
                    rows='3' 
                    className="form-control"
                    onChange={handleChange} 
                    value={inputs.comentario || ''}                    
                    />

                <div className="text-center mt-3">
                    <input type="submit" value="Gravar" className="btn btn-success" />
                </div>
            </form>

            {listaCom.map((val) => (

                <div key={val.id} className="bg-minhacor rounded m-1 p-2">
                    <h1>{val.nome}</h1>
                    <p>{val.email}</p>
                    <p>{val.comentario}</p>

                    <button onClick={() => {handleDelete(val.id)}} className="btn btn-danger">Excluir</button>
                    
                </div>

            ))}
        </main>
    );
}

export default Comentarios;