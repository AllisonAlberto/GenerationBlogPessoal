import React from 'react';
import './App.css';
import Navbar from './components/estatico/navbar/Navbar';
import Footer from './components/estatico/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CadastroPostagem from './components/postagens/cadastropostagem/CadastroPostagem';
import CadastroTema from './components/temas/cadastrotema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarpostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletartema/DeletarTema';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <div style={{ minHeight: "100vh" }}>

          <Route exact path="/">
            <Login />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/cadastrousuario">
            <CadastroUsuario />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/temas">
            <ListaTema />
          </Route>

          <Route path="/posts">
            <ListaPostagem />
          </Route>

          <Route exact path='/formulariopostagem'>
            <CadastroPostagem />
          </Route>

          <Route exact path='/formulariopostagem/:id'>
            <CadastroPostagem />
          </Route>

          <Route exact path='/formulariotema'>
            <CadastroTema />
          </Route>

          <Route exact path='/formulariotema/:id'>
            <CadastroTema />
          </Route>

          <Route path='/deletarpostagem/:id'>
            <DeletarPostagem />
          </Route>

          <Route path='/deletartema/:id'>
            <DeletarTema />
          </Route>

        </div>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
