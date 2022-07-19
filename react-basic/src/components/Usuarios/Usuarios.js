import React, { useState, useEffect } from 'react'

import AdicionarUsuario from '../AdicionarUsuario/AdicionarUsuario'
import Usuario from '../Usuario/Usuario'
 

function Usuarios(){

    const [usuarios, setUsuarios] = useState([])

    //melhor metodo para fazer requisiçoes a apis via hooks
    useEffect(()=>{
      debugger;
      fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(dados=> {
        debugger;
        setUsuarios(dados.data);
      })
    },[])

  const removerUsuario = (usuario) => {
    if (window.confirm(`Tem certeza que deseja remover "${usuario.first_name} ${usuario.last_name}"?`)) {

      fetch(`https://reqres.in/api/users/${usuario.id}`,{
        method: 'DELETE',
      }).then(resposta => {
        
        if(resposta.ok){
          let usuarios = this.state.usuarios
          setUsuarios(usuarios.filter(x => x.id !== usuario.id))
          this.setState({ usuarios: usuarios })
        }

      })}
  }

    return (
      <>
        {/* <AdicionarUsuario adicionarUsuario={adicionarUsuario} /> */}

        {usuarios.map(usuario => (
          <Usuario key={usuario.id}
            usuario={usuario}
            removerUsuario={() => removerUsuario.bind(this, usuario)}
          />
        ))}
      </>
    )
}

export default Usuarios