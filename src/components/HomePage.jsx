import React from 'react'
import Aside from '../components/Aside';
import Cards from '../components/Cards';
import Map from '../components/Map';
import Navegacion from '../components/Navegacion';

const HomePage = () => {
  return (
   <>
    <Navegacion />
      <Aside />
      <Cards/>
      <Map /> 
    
   </>
    
    
  )
}

export default HomePage
