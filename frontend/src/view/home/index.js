import React, { useState } from 'react';
import './home.css';

import { Link } from 'react-router-dom';
import NavBar from '../../componentes/NavBar';
import { useSelector } from 'react-redux';

const Home = () => {
  return (
    <>
      <NavBar />

      <h1>{useSelector(state => state.usuarioEmail)}</h1>

    </>
  )

}

export default Home;
