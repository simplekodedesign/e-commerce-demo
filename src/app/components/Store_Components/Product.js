import React, { useState, useEffect } from 'react'
import * as QueryString from 'query-string'
import Gallery from './Gallery'
import ScrollToTop from '../ScrollToTop'

function Product (props) {
  const [, setInfo] = useState()
  const [images, setImages] = useState([
    "../img/Alternador1.png",
    "../img/Alternador2.png",
    "../img/Alternador1.png",
    "../img/Alternador2.png"
  ])

  let prices

  useEffect (() => {
    console.log(props)
    if(props.product) {
      setInfo(() => {
        prices = createArrayPrice(props.product.prices)
        return props.product
      })
    } else {
      const params = QueryString.parse(window.location.search)
      console.log("Ups!!!")
      
      fetch("", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          id: params.product_id
        }
      })
      .then(response => response.json())
      .then(res => {
        setInfo(() => {
          prices = createArrayPrice(res.prices)
          return res
        })
      })
      .catch(err => console.log(err))
    }
  }, [props])

  function createArrayPrice (data) {
    const x = data.map((item, index) => {
      return (
        <span key={index}>{item}</span>
      )
    })
    return x
  }

  function handleBuy () {
    console.log("You bougth this shit!!!")
  }

  return(
    <div className="product_screen">
      <div className="mainInfoProduct">
        <Gallery images={images} />
        <div className="product_info">
          <h1 className="title bold">{ props.product.data.name }</h1>
          <h3>{ props.product.data.description }</h3>

          <div className="prices">
            {prices}
          </div>
          <div className="paymentMethods">

          </div>
          <button onClick={handleBuy} className="button">Comprar</button>
        </div>
      </div>
      <ScrollToTop />
    </div>
  )
}

export default Product