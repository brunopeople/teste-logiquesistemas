import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

/* Paginas do Pages */
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Registro';

/* Componentens vindos do componentsUser */
import Shorten from './componentsUser/Encurtador/Encurtador';
import List from './componentsUser/Lista/Lista';
import LogadoPage from './pages/Logado';
import DeslogadoPage from './pages/Deslogado';

function App() {

  const logado = localStorage.getItem("logado")==="true";
  if (logado) {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/deslogado" exact component={LogoutPage} />
          <Route path="/logado" exact component={Logado} />
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/cadastro" exact component={Registro} />
          <Route path="/user/shorten" exact component={Encurtador} />
          <Route path="/user/list/:id" exact component={Lista} />
        </Switch>
      </ BrowserRouter>
    )
  } else {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/deslogado" exact component={LogoutPage} />
          <Route path="/logado" exact component={Logado} />
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login />
          <Route path="/cadastro" exact component={Registro} />
        </Switch>
      </ BrowserRouter>
    )
  }


}

export default App;