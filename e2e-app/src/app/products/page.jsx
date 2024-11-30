'use client'

import { Suspense, useContext } from "react"
import ScrollToTop from '@/components/scrollToTop'
import HomePage from '@/modules/home'
import { ContextProvider } from "@/patterns/Provider/TheemProvider"

const Index = () => {
  const {theem} = useContext(ContextProvider);

  return (
    <main className={`${theem}`}>
      <Suspense fallback={<div>Loading...</div>}>
        <section className="m-auto px-5 dark:bg-[#777777]">
        <ScrollToTop />
          <HomePage />
        </section>
      </Suspense>
    </main>
  )
}

export default Index
