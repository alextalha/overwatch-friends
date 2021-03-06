import React, { useState } from 'react';
import './login.css';

import { Link, Redirect } from 'react-router-dom';

import firebase from '../../config/firebase';
import 'firebase/auth';

import { useToasts } from 'react-toast-notifications'

import { useSelector, useDispatch } from 'react-redux';


const Login = () => {


  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [msgTipo, setMsgTipo] = useState('');
  const [carregando, setCarregando] = useState(0);

  const { addToast } = useToasts();

  const dispatch = useDispatch();

  function checkMessage(message) {

    if (message === 'There is no user record corresponding to this identifier. The user may have been deleted.') {
      return "Nenhum usuário encontrado para este email";
    }

    if (message === 'The email address is badly formatted.') {
      return "Padrão de email inválido";
    }

    if (message === 'The password is invalid or the user does not have a password.')
      return "Senha Inválida";

  }


  function Logar() {

    setCarregando(1);
    firebase.auth().signInWithEmailAndPassword(email, senha)
      .then(response => {

        addToast(<span>Login Realizado!</span>,
          {
            appearance: 'success',
            autoDismiss: true,
          });

        setTimeout(() => {
          setCarregando(0);
          dispatch({ type: 'LOG_IN', usuarioEmail: email })

        }, 3000);
      })
      .catch((err) => {

        console.log(err.message)
        setCarregando(0);
        addToast(<span>{checkMessage(err.message)}</span>,
          {
            appearance: "error",
            autoDismiss: true
          });
      })



    setCarregando(0);

  }

  return (

  
    <div className="login-content d-flex align-items-center">
    
    {
      useSelector(state => state.usuarioLogado) > 0 ? <Redirect to='/' /> : "" 
    }

      <form className="form-signin mx-auto">
        <img className="mb-4" src="/overwatch-logo.svg" alt="" width="50" height="50" />
        <h1 className="h3 mb-3 fw-normal text-white">Login</h1>

        <label htmlFor="inputEmail" className="visually-hidden">Email</label>
        <input type="email" id="inputEmail" onChange={(e) => setEmail(e.target.value)} className="form-control my-2" value={email} placeholder="Email" required autofocus />

        <label htmlFor="inputPassword" className="visually-hidden">Senha</label>
        <input type="password" id="inputPassword" onChange={(e) => setSenha(e.target.value)} className="form-control my-2" value={senha} placeholder="Senha" required />

        {
          carregando ? <div class="spinner-border mt-3 mb-5 text-primary" role="status"><span class="sr-only"></span></div>
            : <button onClick={Logar} className="w-100 btn btn-lg btn-login" type="button">Logar</button>
        }

        <div className="opcoes-login">
          <Link to="/recuperar-senha" className="mx-2">Recuperar Senha</Link>
          <Link to='/cadastro' className="mx-2">Quero Cadastrar</Link>

          <p className="mt-5 mb-3 text-muted text-white">&copy; Overwatch-Friends 2020-2021</p>
        </div>
      </form>

    </div>
  );

}

export default Login;
