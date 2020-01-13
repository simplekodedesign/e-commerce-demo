import React, { useState, useEffect } from 'react'

function Product (props) {
  // const [info, setInfo] = useState({})

  useEffect(() => {
    console.log(props)
  }, [])

  return (
    <div className="product">
      <img alt="Product Image" src="./img/Alternador1.png" />
      <div className="product_info">
        <h3>{ props.info.data.name }</h3>
        <p>{ props.info.data.description }</p>
        <div className="product_prices">
          <span>{ props.info.data.price }</span>
        </div>
      </div>
    </div>
  )
}


export default Product