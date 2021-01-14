import React, { useEffect } from 'react'


import { Link } from 'react-router-dom';
import NavBar from '../../componentes/NavBar';
import { useSelector } from 'react-redux';
import { getStreamers } from '../../services/api-twitch';

const Streamers = () => {

 useEffect( () => {

    getStreamers()
 }
   
 , [])
    
    return (
        <>
            <NavBar />
            Streamers
        </>
    )
}

export default Streamers;
