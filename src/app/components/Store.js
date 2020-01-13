import React, { useState, useEffect } from 'react'
import Products_Board from './Store_Components/Products_Board'
import Nav_Bar from './Store_Components/Nav_Bar'

function Store () {
  const [, setCategory] = useState("")
  const [data, setData] = useState({})

  useEffect(() => {
    setCategory("Alternadores")
    setData({
      productsLength: 15
    })
  }, [])

  return (
    <div className="store">
      <StarProduct />
      <Nav_Bar setCategory={setCategory} />
      <Products_Board products={data} />
    </div>
  )
}

export default Store