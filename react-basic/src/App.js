import React from 'react';
import './App.css';
import {BrowserRouter as Router, NavLink, Switch,Routes ,Route} from 'react-router-dom'
import Usuarios from './components/Usuarios/Usuarios'
import AdicionarUsuario from './components/AdicionarUsuario/AdicionarUsuario';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/pageNotFound';
import DetalhesUsuario from './components/DetalhesUsuario/DetalhesUsuario';

function App() {
  return (
    <Router>
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><NavLink to="/" exact>Inicio</NavLink></li>
            <li><NavLink to="/usuarios">Usuarios Cadastrados</NavLink></li>
            <li><NavLink to="/adicionar">Adicionar Usuario</NavLink></li>
          </ul>
        </nav>
      </header>

      <main>

      <Switch>
        <Route path="/usuarios" exact>
        <Usuarios />
        </Route>

        <Route path="/usuarios/:id" exact>
        <DetalhesUsuario />
        </Route>

        <Route path="/adicionar" exact>
        <AdicionarUsuario />
        </Route>

        <Route path="/" exact>
        <Home />
        </Route>

        <Router path="*">
        <PageNotFound/>
        </Router>

      </Switch>


      
      </main>
    </div>
    </Router>
  );
}

export default App;
