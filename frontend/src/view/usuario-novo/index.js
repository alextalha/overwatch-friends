import React, { useState } from 'react';
import firebase from '../../config/firebase';
import 'firebase/auth';

import './usuario-novo.css';
import { useToasts } from 'react-toast-notifications'



const NovoUsuario = () => {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [msgTipo, setMsgTipo] = useState('');
  const [msg, setMsg] = useState('');
  const [carregando, setCarregando] = useState(0);

  const { addToast } = useToasts();

  function cadastrar() {
    
    setCarregando(1)
    setMsgTipo(null)

    if (!email || !senha) {

      addToast(<span>Você precisa informar o email e a senha para cadastro!</span>,
        {
          appearance: 'error',
          autoDismiss: true,
        });
      return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, senha).then(response => {
      setCarregando(0)
      addToast(<span>Usuário Cadastrado com Sucesso</span>,
        {
          appearance: 'success',
          autoDismiss: true,
        });


    }).catch(e => {
      setCarregando(0)
      console.log(e);

      let message = "";
      switch (e.message) {
        case 'Password should be at least 6 characters':
          message = 'A senha deve ter 6 caracteres';
          break;
        case 'The email address is already in use by another account.':
          message = 'Este email já está sendo utilizado por outro usuário';
          break;
        case 'The email address is badly formatted.':
          message = 'O formato do seu email é inválido';
          break;
        default:
          message = 'Não foi possível cadastrar. Tente novamente mais tarde';
          break;
      }

      addToast(<span>{message}</span>,
        {
          appearance: 'error',
          autoDismiss: true,
        });
    })

  }

  return (
    <div className="form-cadastro">
      <form className="text-center form-login mx-auto mt-5">
        <h1 className="h3 mb-3 text-black font-weight-bold">Novo Usuário</h1>

        <input type="email" className="form-control my-2" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" className="form-control my-2" onChange={(e) => setSenha(e.target.value)} placeholder="Password" />

        {
          carregando ?  <div class="spinner-border mt-3 mb-5 text-primary" role="status"><span class="sr-only"></span></div>
          : <button onClick={cadastrar} type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro">Cadastrar</button>
        }
       
      </form>
    </div>
  )
}

export default NovoUsuario