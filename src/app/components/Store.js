import React, { useState, useEffect } from 'react'
import Products_Board from './Store_Components/Products_Board'

function Store () {
  const [category, setCategory] = useState("")

  useEffect(() => {
    setCategory("Alternadores")
  })

  return (
    <div>
      <h1>Showing { category } category</h1>
      <Products_Board />
    </div>
  )
}

export default Store