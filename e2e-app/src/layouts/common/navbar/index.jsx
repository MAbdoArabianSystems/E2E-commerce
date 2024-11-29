'use client'

import { Suspense } from 'react'
import MainNav from './MainNav'
import Nav from './nav'

const Index = () => {
  return (
    <header className='m-auto w-full bg-neutral-700 '>
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
