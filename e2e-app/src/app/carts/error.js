'use client'
import React from 'react'

const Error = ({error , reset}) => {
  return (
    <div>
      <p>{error?.message}</p>
    </div>
  )
}

export default Error
