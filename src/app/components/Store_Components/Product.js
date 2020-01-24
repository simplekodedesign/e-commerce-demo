import React, { useState, useEffect } from 'react'
import * as QueryString from 'query-string'
import Gallery from './Gallery'
import ScrollToTop from '../ScrollToTop'

function Product (props) {
  const [info, setInfo] = useState({
    data: {}
  })
  const [images, setImages] = useState([])

  let prices

  useEffect (() => {

    // NEED TO BE TESTED AND CHANGE DATA FROM SERVER BECAUSE OF IMAGES
    // if(props.product.data) {
    //   console.log(props.product.data)
    //   setInfo(() => {
    //     prices = createArrayPrice(props.product.prices)
    //     setImages(props.product.images)
    //     return props.product
    //   })
    // } else {
    // }
    const params = QueryString.parse(window.location.search)

    const body = JSON.stringify({
      id: params.product_id
    })
    
    fetch("/client/product/find", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    })
    .then(response => response.json())
    .then(res => {
      console.log(res)
      setInfo(() => {
        prices = createArrayPrice(res.prices)
        setImages(res.images)
        return res
      })
    })
    .catch(err => console.log(err))
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
          <h1 className="title bold">{ info.data.name }</h1>
          <h3>{ info.data.description }</h3>

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