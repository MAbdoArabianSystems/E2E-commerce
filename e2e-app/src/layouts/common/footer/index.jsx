'use client'

import MainFooter from './MainFooter';
import Footer from './Footer';
import { useContext } from 'react';
import { ContextProvider } from '@/patterns/Provider/TheemProvider';


const Index = () => {
  const {theem} = useContext(ContextProvider)
  return (
    <footer
    className={`m-auto w-full bg-black/5 dark:bg-[#37415] py-5 ${theem === 'dark' ? 'bg-gray-900 text-[#fff]' : 'bg-gray-200 text-[#000]'}`}
  >
    <MainFooter />
    <Footer />
  </footer>
  )
}

export default Index
