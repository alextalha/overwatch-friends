import React from 'react';
import { useToasts } from 'react-toast-notifications'

function validateMessageLogin(message){

  if(message === 'There is no user record corresponding to this identifier. The user may have been deleted.'){
    return "Nenhum usuário encontrado para este email"
  }

  if(message === 'The email address is badly formatted.'){
     return "Padrão de email inválido"
  }

}

const Toast = ({ message, apperance }) => {

  console.log('message',message);
  console.log('apperance',apperance);

  const { addToast } = useToasts();

  addToast(<span>{validateMessageLogin(message)}</span>,
    {
      appearance: apperance,
      autoDismiss: true,
    });
}

export default Toast;

