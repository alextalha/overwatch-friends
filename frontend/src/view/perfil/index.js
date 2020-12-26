import React, { useState } from 'react';
import './perfil.css';

import { Link } from 'react-router-dom';
import NavBar from '../../componentes/NavBar';
import { useSelector } from 'react-redux';

const Home = () => {

  const [email, setEmail] = useState("");
  const [battletag, setBattletag] = useState('');

  return (
    <>
      <NavBar />

      <h4>Perfil </h4>
      <div className="form-perfil">
        <form className="form-login mx-auto mt-5">
          <div class="row">
            <div className="form-outline mb-4">
              <label class="form-label" for="email">Email</label>
              <input type="email" className="form-control" id="email" aria-describedby="email" value={useSelector(state => state.usuarioEmail)} readOnly />
            </div>

            <div className="col-md-6 mb-3">
              <label for="battletag" className="form-label">Battletag</label>
              <div class="input-group">
                <span class="input-group-text">#</span>
                <input type="text" className="form-control" id="battletag" aria-describedby="battletag" value={(e) => setBattletag} />
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <label for="state" class="form-label">Plataforma</label>
              <select class="form-select" id="state" required>
                <option value>-</option>
                <option value="PC">PC</option>
                <option value="Xbox">Xbox</option>
                <option value="Playstation">Playstation</option>
                <option value="Nintendo">Nintendo</option>
              </select>
            </div>

            <div className="col-md-4">
              <label for="state" class="form-label">Estado</label>
              <select class="form-select" id="state" required>
                <option value>-</option>
                <option value="Rio de Janeiro">Rio de Janeiro</option>
              </select>
            </div>

            <div className="col-md-4 ">
              <label for="state" class="form-label">Cidade</label>
              <select class="form-select" id="city" required>
                <option value>-</option>
                <option value="Rio de Janeiro">Rio de Janeiro</option>
              </select>
            </div>

            <div className="col-md-4">
              <label for="state" class="form-label">Bairro</label>
              <select class="form-select" id="city" required>
                <option value>-</option>
                <option value="Coelho Neto">Coelho Neto</option>
              </select>
            </div>
          </div>




          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  )

}

export default Home;
