import React, { useState, useEffect } from 'react'
import * as QueryString from 'query-string'

function Product (props) {
  const [, setInfo] = useState()

  useEffect (() => {
    if(props.product) {
      setInfo(props.product)
    } else {
      const params = QueryString.parse(window.location.search)
      console.log("Ups!!!")
      fetch("", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          id: params.id
        }
      })
      .then(response => response.json())
      .then(res => {
        console.log(res)
        setInfo(res)
      })
      .catch(err => console.log(err))
    }
  }, [])

  return(
    <div className="product_screen">
      <div className="gallery">
        <h1>This is the gallery</h1>
      </div>
      <div className="product_info">
        <h1>This is the info</h1>
      </div>
    </div>
  )
}

export default Product