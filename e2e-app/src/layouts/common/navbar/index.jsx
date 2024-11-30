'use client'

import { Suspense, useContext } from 'react'
import MainNav from './MainNav'
import Nav from './nav'
import { ContextProvider } from '@/patterns/Provider/TheemProvider'

const Index = () => {
  const {theem} = useContext(ContextProvider)


  return (
    <header className={`${theem} m-auto w-full bg-neutral-700 text-white dark:bg-neutral-900 dark:text-gray-200`}>
    <nav>
      <Suspense fallback={<div>Loading...</div>}>
        <MainNav />
        <Nav />
      </Suspense>
    </nav>
  </header>
  
  )
}

export default Index
