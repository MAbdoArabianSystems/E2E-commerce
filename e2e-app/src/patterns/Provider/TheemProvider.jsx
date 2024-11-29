'use client'

import React, { createContext, useState } from 'react'
export const ContextProvider = createContext();

const TheemProvider = ({children}) => {

    const [theem , setTheem] = useState('light')
    const toogleTheem = () => {
        setTheem(theem === 'light' ? 'dark' : 'light');
    }

    const initialValues = {
        theem,
        toogleTheem,
    }


  return (
    <ContextProvider.Provider value={initialValues}>
      {children}
    </ContextProvider.Provider>
  )
}

export default TheemProvider
