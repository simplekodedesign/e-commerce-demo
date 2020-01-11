import React, { useState, useEffect } from 'react'
import Products_Board from './Store_Components/Products_Board'
import Nav_Bar from './Store_Components/Nav_Bar'

function Store () {
  const [, setCategory] = useState("")
  const [data, setData] = useState([])
  const [token, setToken] = useState(null)

  useEffect(() => {
    setCategory("Alternadores")

    const body = JSON.stringify({
      email: "AdminDNL",
      password: "0990"
    })

    fetch("/login/", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    })
    .then(response => response.json())
    .then(res => {
      console.log(res)
      setToken(res.token)
      return (fetch("/admin/product/", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'authorization': 'bearer ' + res.token
        }
      }))
    })
    .then(response => response.json())
    .then(res => {
      setData(res)
    })
  }, [])

  return (
    <div className="store">
      <Nav_Bar setCategory={setCategory} />
      <Products_Board products={data} />
    </div>
  )
}

export default Store