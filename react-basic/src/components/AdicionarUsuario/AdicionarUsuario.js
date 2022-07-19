import React, { useState } from 'react'

import './AdicionarUsuario.css'

function AdicionarUsuario() {


  const [firstname, setNome] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')

  const onSubmitHandler= event => {
    event.preventDefault()
      debugger;
    const usuario = {
      first_name: firstname,
      last_name: lastname,
      email: email,
    }

    fetch('https://reqres.in/api/users',
    {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(usuario)
    })
    .then(resposta => {
      if(resposta.ok){
        clean()
      }
    })
  }

function clean(){
  setNome('')
  setLastname('')
  setEmail('')
}

    return (
      <div className="AdicionarUsuario">
        <h2>Adicionar Usuário</h2>
        <form onSubmit={onSubmitHandler}>
          <div className="Linha">
            <div className="Coluna">
              <label>Nome</label>
              <input
                type="text"
                name="first_name"
                value={firstname}
                onChange={event => setNome(event.target.value)}
                required>
              </input>
            </div>
            <div className="Coluna">
              <label>Sobrenome</label>
              <input
                type="text"
                name="last_name"
                value={lastname}
                onChange={event => setLastname(event.target.value)}
                required>
              </input>
            </div>
          </div>
          <div className="Linha">
            <div className="Coluna">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                required>
              </input>
            </div>
          </div>
          <button type="submit">
            Adicionar
        </button>
        </form>
      </div>
    )
}

export default AdicionarUsuario