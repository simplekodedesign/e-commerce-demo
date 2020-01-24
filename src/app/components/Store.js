import React, { useState, useEffect } from 'react'
import Products_Board from './Store_Components/Products_Board'
import Nav_Bar from './Store_Components/Nav_Bar'
import StarProduct from './Store_Components/starProduct'
import ScrollToTop from './ScrollToTop'

function Store (props) {
  const [, setCategory] = useState("")
  const [data, setData] = useState([])
  // const [token, setToken] = useState(null)
  const [message, setMessage] = useState("")

  useEffect(() => {
    setCategory("Alternadores")

    bringProducts()
  }, [])

  function bringProducts () {
    fetch("/client/product/", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(res => {
      setData(res)
    })
  }

  function filterProduct (data) {
    if(data !== "") {
      const body = JSON.stringify({
        name: data
      })
  
      fetch("/client/product/filter", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: body
      })
      .then(response => response.json())
      .then(res => {
        console.log(res)
        setData(res)
      })
    } else {
      bringProducts()
    }
  }

  return (
    <div className="store">
      <StarProduct />
      <Nav_Bar  
        filterProduct={filterProduct}
        message={message}
      />
      <Products_Board
        products={data}
        setProduct={props.setProduct}
      />
      <ScrollToTop />
    </div>
  )
}

export default Store