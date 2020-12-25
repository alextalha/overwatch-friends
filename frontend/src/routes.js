import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './view/login'
import Cadastro from './view/usuario-novo'
import Home from './view/home'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/cadastro" component={Cadastro} />

      </Switch>
    </BrowserRouter>
  )
} 