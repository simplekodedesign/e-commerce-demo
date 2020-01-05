import React, { useState, useEffect } from 'react'
import Product from './Product'

function Store () {
  const [category, setCategory] = useState("")

  useEffect(() => {
    setCategory("Alternadores")
  })

  return (
    <div>
      <h1>Showing { category } category</h1>
      <Product />
    </div>
  )
}

export default Store