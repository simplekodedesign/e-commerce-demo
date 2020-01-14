import React, { useState, useEffect } from 'react'
import Products_Board from './Store_Components/Products_Board'
import Nav_Bar from './Store_Components/Nav_Bar'
import StarProduct from './Store_Components/starProduct'

function Store (props) {
  const [, setCategory] = useState("")
  const [data, setData] = useState([])
  // const [token, setToken] = useState(null)
  const [message, setMessage] = useState("")

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

  function findProduct (data) {
    console.log("You're looking for: " + data)
  }

  return (
    <div className="store">
      <StarProduct />
      <Nav_Bar  
        findProduct={findProduct}
        message={message}
      />
      <Products_Board
        products={data}
        setProduct={props.setProduct}
      />
    </div>
  )
}

export default Store