import React, { useState } from 'react';
import './recuperar-senha.css';

import { Link, Redirect } from 'react-router-dom';

import firebase from '../../config/firebase';
import 'firebase/auth';

import { useToasts } from 'react-toast-notifications'

import { useSelector, useDispatch } from 'react-redux';

const RecuperarSenha = () => {

  const [carregando, setCarregando] = useState(0);
  const [email, setEmail] = useState('');


  const { addToast } = useToasts();

  function notification(message,appearance){
    
    addToast(<span>{message}</span>,
      {
        appearance: `${appearance}`,
        autoDismiss: true,
      });
  }


  function recuperarSenha() {
      setCarregando(1)
    let message = "Informe seu email!"
    if (!email) {

      notification(message,"error")
      setCarregando(0)
      return;
    }

    firebase.auth().sendPasswordResetEmail(email).then(resultado => {

      message = "Enviamos um link no seu email para você redefinir sua senha!";
      notification(message,"success")
      setCarregando(0)
    }).catch(err =>  {
      message = 'Verifique se o email está certo!'
      notification(message,"error")
      setCarregando(0)
    })    

}


return (

  <div className="form-cadastro">
    <form className="text-center form-login mx-auto mt-5">
      <h1 className="h3 mb-3 text-black font-weight-bold">Recuperar Senha</h1>

      <input type="email" className="form-control my-2" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />

      {
        carregando ? <div class="spinner-border mt-3 mb-5 text-primary" role="status"><span class="sr-only"></span></div>
          : <button onClick={recuperarSenha} type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-enviar">Enviar</button>
      }

    </form>
  </div>
);

}

export default RecuperarSenha;
