import React from 'react'
import { useContext } from 'react';
import Aside from '../components/Aside';
import Cards from '../components/Cards';
import Map from '../components/Map';
import Navegacion from '../components/Navegacion';
import { AppContext } from '../context/AppContext';

const HomePage = () => {

  const { Informacion } = useContext(AppContext);

  return (
   <>
    <Navegacion />
      <Aside />
      { Informacion ? <Cards/> : null  }
      <Map /> 
   </>
    
    
  )
}

export default HomePage
