
import axios from 'axios';

export async function apiEstados() {

  const estados = localStorage.getItem('estados');

  if (!estados) {
    console.log('renew estados');
    const response = await axios.get('http://www.geonames.org/childrenJSON?geonameId=3469034')
    const data = await response.data;

    localStorage.setItem('estados', JSON.stringify(data));
    return JSON.parse(localStorage.getItem('estados'));

  } else {
    return JSON.parse(estados);
  }
}

export async function apiCidades(id_estado) {

  const cidades = localStorage.getItem('cidades');
  const id_estado_session = localStorage.getItem('id_estado');

  console.log('id_estado_session', id_estado_session)
  console.log('id_estado', id_estado)


  if (!id_estado !== id_estado_session) {

    console.log('renew cidades');
    const response = await axios.get(`http://www.geonames.org/childrenJSON?geonameId=${id_estado}`)
    const data = await response.data;

    localStorage.setItem('id_estado', id_estado);
    localStorage.setItem('cidades', JSON.stringify(data));
    return JSON.parse(localStorage.getItem('cidades'));

  } else {

    return JSON.parse(cidades);
  }

}


export async function apiBairros(id_cidade) {

  const bairros = localStorage.getItem('bairros');
  const id_cidade_session = localStorage.getItem('id_cidade');

  console.log('id_cidade_session', id_cidade_session)
  console.log('id_cidade', id_cidade)

  if (!id_cidade !== id_cidade_session) {

    console.log('renew bairros');
    const response = await axios.get(`http://www.geonames.org/childrenJSON?geonameId=${id_cidade}`)
    const data = await response.data;

    localStorage.setItem('id_cidade', id_cidade);
    localStorage.setItem('bairros', JSON.stringify(data));
    return JSON.parse(localStorage.getItem('bairros'));

  } else {

    return JSON.parse(bairros);
  }

}

export default { apiEstados, apiCidades, apiBairros };


