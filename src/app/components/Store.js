import React, { useState, useEffect } from 'react'
import Products_Board from './Store_Components/Products_Board'
import Search_Bar from './Store_Components/Search_Bar'

function Store () {
  const [category, setCategory] = useState("")
  const [data, setData] = useState({})

  useEffect(() => {
    setCategory("Alternadores")
    setData({
      productsLength: 15
    })
  }, [])

  return (
    <div className="store">
      <Search_Bar setCategory={setCategory} />
      <h1>Showing { category } category</h1>
      <Products_Board products={data} />
    </div>
  )
}

export default Store