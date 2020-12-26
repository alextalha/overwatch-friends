import React from 'react';
import './navbar.css';

import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/home"> <img className="" src="/overwatch-logo.svg" alt="" width="50" height="50" /> Friends</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Streamers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Chat</a>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                Configuração 
              </a>

              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="/perfil">Perfil</Link>
                <a className="dropdown-item" href="#">Meu DashBoard</a>
                <Link className="dropdown-item" to="/recuperar-senha">Redefinir Senha</Link>
                <Link className="dropdown-item" to="/login">Sair</Link>
              </ul>
            </li>


          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar;
