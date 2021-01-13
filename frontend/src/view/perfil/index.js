import React, { useState, useEffect } from 'react';
import './perfil.css';

import { Link } from 'react-router-dom';
import NavBar from '../../componentes/NavBar';
import { useSelector } from 'react-redux';

import { apiEstados, apiCidades, apiBairros } from '../../services/api-localizacao';

const Home = () => {

  const [email, setEmail] = useState("");
  const [battletag, setBattletag] = useState('');
  const [estados, setEstados] = useState([])
  const [cidades, setCidades] = useState([])
  const [bairros, setBairros] = useState([])


  useEffect(() => {

    apiEstados()
      .then(estados => {
        console.log('estados *******************',estados)
        setEstados(estados.geonames);
      })
      .catch(err => console.log(err))

  }, [])


  function handleCityOption(event) {

    const index = event.target.selectedIndex;
    const optionElement = event.target.childNodes[index];
    const option = optionElement.getAttribute('data-id');
    console.log('city id', option);

    apiCidades(option)
      .then(cidades => {
        console.log('cidades *******************',cidades)
        setCidades(cidades.geonames)
      })
      .catch(err => console.log(err))
  }


  function handleBairrosOption(event) {

    const index = event.target.selectedIndex;
    const optionElement = event.target.childNodes[index];
    const option = optionElement.getAttribute('data-id');
    console.log('bairro id', option);

    apiBairros(option)
      .then(bairro => {
        console.log('bairros *******************',bairro)
        setBairros(bairro.geonames)
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <NavBar />

      <h4 className="mt-4">Perfil </h4>
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
                <input type="text" className="form-control" id="battletag" aria-describedby="battletag" value={battletag} onChange={(e) => setBattletag(e.target.value)} />
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
              <select onChange={(e) => handleCityOption(e)} class="form-select" id="state" required>
                <option value>-</option>
                {estados
                  ? estados?.map(estado => {
                  return <option key={estado.adminCode1} data-id={estado.geonameId} value={estado.adminCodes1["ISO3166_2"]}>{estado.adminName1}</option>
                })
                : "Loading..."}

              </select>
            </div>

            <div className="col-md-4 ">
              <label for="state" class="form-label">Cidade</label>
              <select onChange={(e) => handleBairrosOption(e)} class="form-select" id="bairro" required>
                <option value>-</option>
                {cidades && cidades?.map(cidade => {
                  return <option key={cidade.toponymName} data-id={cidade.geonameId} value={cidade.adminCodes1["ISO3166_2"]}>{cidade.name}</option>
                })

                }
              </select>
            </div>

            <div className="col-md-4">
              <label for="state" class="form-label">Bairro</label>
              <select class="form-select" id="city" required>
                <option value>-</option>
                {bairros
                  ? bairros?.map(bairro => {
                  return <option key={bairro.adminCode1} data-id={bairro.geonameId} value={bairro.adminCodes1["ISO3166_2"]}>{bairro.toponymName}</option>
                })
                : "Loading..."}
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
