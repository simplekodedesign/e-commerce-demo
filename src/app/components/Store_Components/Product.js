import React, { useState, useEffect } from 'react'

function Product (props) {
  const [info, setInfo] = useState({})

  useEffect(() => {
    if (!props.length) {
      console.log("Nothing here")
      setInfo({
        imgUrl: "./img/Alternador1.png",
        name: "Alternador1",
        price1: "250",
        price2: "780000"
      })
    }
  }, [])

  return (
    <div className="product">
      <img alt="Product Image" src={info.imgUrl} />
      <div className="product_info">
        <h3>{ info.name }</h3>
        <div className="product_prices">
          <span>{ info.price1 }</span>
          <span>{ info.price2 }</span>
        </div>
      </div>
    </div>
  )
}


export default Product