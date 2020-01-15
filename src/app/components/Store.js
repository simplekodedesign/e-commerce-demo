import React, { useState, useEffect } from 'react'
import Products_Board from './Store_Components/Products_Board'
import Nav_Bar from './Store_Components/Nav_Bar'
import StarProduct from './Store_Components/starProduct'
import Login from './Login'

function Store () {
  const [, setCategory] = useState("")
  const [data, setData] = useState([])
  // const [token, setToken] = useState(null)
  const [isAdmin, setIsAdmin] = useState(true)

  useEffect(() => {
    setCategory("Alternadores")

    fetch("client/product/", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(res => {
      console.log(res)
      setData(res)
    })
  }, [])

  return (
    <div className="store">
      <StarProduct />
      <Nav_Bar />
      <Products_Board products={data} />
    </div>
  )
}

export default Store