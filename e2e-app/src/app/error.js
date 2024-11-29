'use client'

import Link from "next/link"

 
export default function Error({ error, reset }) {
  return (
    <html>
      <body>
      <div className="w-full flex flex-col justify-center align-middle items-center gap-5 p-10 ">
      <h2>Something went wrong!</h2>
      <p>{error?.message}</p>
      <button className="bg-[#23d68c] w-40 h-10 text-[#fff] text-center" onClick={() => reset()}>Try again</button>
      <button className="bg-black w-40 h-10 text-[#fff] text-center">
      <Link href="/addd">Redirect Home</Link>
      </button>
    </div>
      </body>
    </html>
  )
}