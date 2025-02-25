import React, { ReactNode } from 'react'

export default function layout({children}:{children:ReactNode}) {
  return (
    <div>
        <h2>I am Back </h2>
      {children}
    </div>
  )
}
