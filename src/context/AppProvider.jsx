import React from 'react'
import { useState } from 'react'
import { AppContext } from './AppContext'

export const AppProvider = ({ children }) => {

    const [Informacion, setInformacion] = useState( false );

  return (
    <AppContext.Provider value={{ Informacion: Informacion, setInformacion }}>
        { children }
    </AppContext.Provider>
  )
}
