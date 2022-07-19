import React, { useEffect, useState } from 'react'
import {Link, useParams} from  'react-router-dom'


function DetalhesUsuario(){

    const {id} = useParams()

    const [usuario, setUsuario] = useState([])

    //mlehor maneira para fazer requisicoes via hooks
    useEffect(() => {
        fetch(`https://reqres.in/api/users/${id}`).
        then(resposta => resposta.json())
        .then(dados =>{
            debugger;
            setUsuario(dados.data);
        })
    },[id])

    if(usuario !== undefined){
        return <>
        <h1>{usuario.first_name} {usuario.last_name}</h1>
        <img src={usuario.avatar} alt={usuario.first_name}/>
        <p>{usuario.email}</p>
        <Link to="/usuarios">Voltar</Link>
        </>
    }

    return <>
    <h1> Usuario nao encontrado</h1>
    <Link to="/usuarios">Voltar</Link>
    </>
}

export default DetalhesUsuario